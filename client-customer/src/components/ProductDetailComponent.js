import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';
import '../styles/ProductDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className="product-detail-container">
          <div className="row  justify-content-center">
            <div className=" product-detail-body">
            <div className="col-6 detail-img">
              <div className='img-detail'>
              <img src={"data:image/jpg;base64," + prod.image} width="350px" height="400px" alt="" />
              </div>
            </div>
            <div className="col-6 product-detail-right">
              <span className='detail-name'>
                {prod.name}
                </span>
                <span className='detail-cate'>
                Loại: {prod.category.name}
              </span>
              <span className="detail-price">
              Giá: {prod.price} VNĐ
              </span>
              <span className="detail-quality">
               Số lượng <input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} />
                </span>
                <span className="detail-add-cart">


                <button className="custom-cart-icon" onClick={(e) => this.btnAdd2CartClick(e)}   >
                         <FontAwesomeIcon icon={faCartArrowDown} bounce/>
                          <span>Thêm vào giỏ hàng</span>
                       </button>
              </span>
            </div>
            </div>

          </div>
          
          </div>
        // <div className="product-detail-align-center">
        //   <div className='product-detail-form'>
        //   <div className='product-detail-description'>
        //       <div className='img-detail'>
        //       <img src={"data:image/jpg;base64," + prod.image} width="350px" height="400px" alt="" />
        //       </div>
        //       <div className='description-detail'>
        //         <h2>Tính năng nổi bật </h2>
        //       </div>
        //   </div>
        //   <div className='box-detail'>
        //     <div className='box-price'> 
        //     <div className='box-data'>
        //           <ul className='list-data'>
        //             <li className='item-list-data' onClick={this.handleItemDataClick}>
        //               <span className='check-icon-data'>✔</span>
        //               <div className='item-data'>
        //                 <strong className='item-name-data'>512GB</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //             </li>
        //             <li className='item-list-data' onClick={this.handleItemDataClick}>
        //               <span className='check-icon-data'>✔</span>
        //               <div className='item-data'>
        //                 <strong className='item-name-data'>256GB</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //             </li>
        //             <li className='item-list-data' onClick={this.handleItemDataClick}>
        //               <span className='check-icon-data'>✔</span>
        //               <div className='item-data'>
        //                 <strong className='item-name-data'>128GB</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //             </li>
                        
        //           </ul>
        //           </div>
        //         <div className='box-product-variant'>
        //           <div className='box-title'><p>Chọn màu để xem giá và chi nhánh còn hàng</p></div>
        //           <div className='box-price'>
        //           <ul className='list-variant'>
        //             <li className='item-list-variant' onClick={this.handleItemClick}>
        //               <span className='check-icon'>✔</span>
        //               <a className='align-item-center'>
        //               <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
        //               <div className='item-des'>
        //                 <strong className='item-name'>vàng</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //               </a>
        //             </li>
        //             <li className='item-list-variant' onClick={this.handleItemClick}>
        //             <span className='check-icon'>✔</span>
        //               <a>
        //               <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
        //               <div className='item-des'>
        //                 <strong className='item-name'>vàng</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //               </a>
        //             </li>
        //             <li className='item-list-variant' onClick={this.handleItemClick}>
        //               <span className='check-icon'>✔</span>
        //               <a>
        //               <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
        //               <div className='item-des'>
        //                 <strong className='item-name'>vàng</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //               </a>
        //             </li>
        //             <li className='item-list-variant' onClick={this.handleItemClick}>
        //               <span className='check-icon'>✔</span>
        //               <a>
        //               <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
        //               <div className='item-des'>
        //                 <strong className='item-name'>vàng</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //               </a>
        //             </li>
        //             <li className='item-list-variant'onClick={this.handleItemClick}>
        //               <span className='check-icon'>✔</span>
        //               <a>
        //               <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
        //               <div className='item-des'>
        //                 <strong className='item-name'>vàng</strong>
        //                 <span>{prod.price}</span>
        //               </div>
        //               </a>
        //             </li>
        //           </ul>
        //           </div>
        //         </div>
                
        //         <div className='btn-price'>
        //         <ul className='btn-price-list'>
        //             <li className='item-list-price' >
        //               <div className='item-price'>
        //                 <strong className='item-name-price'>512GB</strong>
        //                 <span>20000000</span>
        //               </div>
        //             </li>
        //             <li className='item-list-price'>
        //               <div className='item-price'>
        //                 <strong className='item-name-price'>{prod.price}</strong>
        //                 <span>20000000</span>
        //               </div>
        //             </li>
                 
        //             </ul>
        //             </div>
        //         <div className='btn-buy-now'>
        //               <div className='btn-buy'>
        //               <button onClick={(e) => this.handleBuyNowClick(e)}>MUA NGAY
        //               <p>(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</p>
        //               </button>
        //               </div>
        //               <div className='btn-cart'>
                                         
        //                 <button className="custom-cart-icon" onClick={(e) => this.btnAdd2CartClick(e)}   >
        //                   <FontAwesomeIcon icon={faCartArrowDown} bounce/>
        //                   <p>Thêm vào giỏ hàng</p>
        //                 </button>
        //               </div>
        //         </div>
        //         <div className='btn-end'>
        //           <button>Tìm hiểu thêm </button>
        //         </div>
        //         </div>
        //   </div>
        //   </div>
        // </div>
      );
    }
    return (<div />);
  }

  ///Thêm box-data
 handleItemDataClick = (e) => {
  e.stopPropagation();

  const items = document.querySelectorAll('.item-list-data');
  items.forEach(item => {
    item.classList.remove('active');
    const checkIconData = item.querySelector('.check-icon-data');
    if (checkIconData) {
      checkIconData.style.display = 'none';
    }
  });

  const currentItem = e.currentTarget;
  currentItem.classList.add('active');
  const checkIconData = currentItem.querySelector('.check-icon-data');
  if (checkIconData) {
    checkIconData.style.display = 'block';
  }
};
  handleItemClick = (e) => {
    e.stopPropagation();
  
    const items = document.querySelectorAll('.item-list-variant');
    items.forEach(item => {
      item.classList.remove('active');
      const checkIcon = item.querySelector('.check-icon');
      if (checkIcon) {
        checkIcon.style.display = 'none';
      }
    });
  
    const currentItem = e.currentTarget;
    currentItem.classList.add('active');
    const checkIcon = currentItem.querySelector('.check-icon');
    if (checkIcon) {
      checkIcon.style.display = 'block';
    }
  };
  // event-handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) { // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else { // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert('OK BABY!');
    } else {
      alert('Please input quantity');
    }
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  // apis
  apiGetProduct(id) {
    axios.get('/api/customer/products/' + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }
}
export default withRouter(ProductDetail);