import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaStar,  FaRegHeart} from 'react-icons/fa';
import withRouter from '../utils/withRouter';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/product.css'
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    const prods = this.state.products.map((item) => (
      <div key={item._id} className='productList'>
        <div className='productCard'>
          <Link to={'/product/' + item._id}>
            <img src={"data:image/jpg;base64," + item.image} alt='product-img' className='productImage' />
          </Link>
          <FontAwesomeIcon icon={faCartArrowDown}   className='productCard__cart' />
          <FaRegHeart className='productCard__fastSelling' />
          <div className='productCard__content'>
            <h3 className='productName'>{item.name}</h3>
            <div className='displayStack__1'>
              <div className='productPrice'>{item.price}đ</div>
              <div className='productSales'>{item.totalSales} units sold</div>
            </div>
            <div className='displayStack__2'>
              <div className='productRating'>
                {[...Array(item.rating)].map((index) => (
                  <FaStar id={index + 1} key={index} />
                ))}
              </div>
              <div className='productTime'>{item.timeLeft} days left</div>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className='product-text-center'>
        <h2 className='h2-text-center'>LIST PRODUCTS</h2>
        <div className='product-container'>
        {prods}
        </div>

      </div>
    );
  }

  


  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    const params = this.props.params;
    const prevParams = prevProps.params;

    if (params.cid !== prevParams.cid || params.keyword !== prevParams.keyword) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    const params = this.props.params;

    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }

  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }

  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}

export default withRouter(Product);
