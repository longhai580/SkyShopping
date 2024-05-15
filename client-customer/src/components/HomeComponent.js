import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';  // Import SliderComponent
import '../styles/Home.scss'
import image3 from '../img/image3.jpg'
import image5 from '../img/image5.png'
import Footer from './FooterComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: [],
      isDropdownOpen: false,
      isSliderOpen: true, // Set isSliderOpen to true initially if you want the slider to be open by default


    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className=" new-inline">
          <div className="home-product">
            <div className="home-product-new">
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="250px" height="250px" alt="" /></Link>
            </div>
            <span className="description-product-new">{item.name}<br />Price: {item.price}</span>
          </div>
          <div className="btn-see-more">
             <button  class="btn btn-primary btn-see-more-detail">Xem thêm <Link to={'/product/' + item._id}> </Link></button>
          
          </div>
        </div>
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className=" new-inline">
        <div className="home-product">
          <div className="home-product-new">
          <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="250px" height="250px" alt="" /></Link>
          </div>
          <span className="description-product-new">{item.name}<br />Price: {item.price}</span>
        </div>
        <div className="btn-see-more">
           <span  class="btn btn-primary btn-see-more-detail">Xem thêm  <Link to={'/product/category/' + item._id}> </Link></span>
        
        </div>
      </div>
        // <div key={item._id} className="new-inline">
        //   <figure>
        //     <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
        //     <figcaption className="cap-text-center">{item.name}<br />Price: {item.price}</figcaption>
        //   </figure>
        // </div>
      );
    });
    return (
      <div className="home-main">
        <div className='col-12 slider-home'>
          <SliderComponent arrImages={[image5, image3]} isSliderOpen={this.state.isSliderOpen} />

        </div>
        <div className="col-12 home-align-center">
        
          <h2 className="home-text-center">NEW PRODUCTS</h2>
          {newprods}
        </div>
        {this.state.hotprods.length > 0 ?
          <div className="col-12 home-align-center">
            <h2 className="home-text-center">HOT PRODUCTS</h2>
            {hotprods}
          </div>
          : <div />}
        
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;