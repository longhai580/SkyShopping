import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/inform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
class Inform extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {
        categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const { mycart } = this.context;

    return (
      <div className="inform-border-bottom">
        <div className="inform-float-left">
        <form className="search">
          <div className='search-container'>
        <input type="search" placeholder="Sản phẩm cần tìm?" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
        <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={(e) => this.btnSearchClick(e)}/> 
        </div>
        </form>          
        </div>
        <div className="inform-float-right">
          <ul className='list-float-right'>
            <li> <FontAwesomeIcon icon={faPhoneVolume} /> Hotline</li>
            <li><Link to='/mycart'><FontAwesomeIcon icon={faCartArrowDown} /> <span className="cart-title">Giỏ hàng của bạn</span>
            {mycart.length > 0 && (
              <span className="item-count">{mycart.length}</span>
            )}</Link> 
            </li>
            <li><FontAwesomeIcon icon={faTruck} /> Vận chuyển </li>
            <li ><Link to='/gmap'><FontAwesomeIcon icon={faShop} /> Cửa hàng</Link></li>

            {this.context.token === '' ? (
              <div className='login-container'>
                <li className='login'><FontAwesomeIcon icon={faUser} /> Đăng nhập
                   <ul className='sub-login'>
                     <li><Link to='/login'>Đăng nhập</Link></li>
                     <li><Link to='/signup'>Đăng kí</Link></li>
                     <li><Link to='/active'>Kích hoạt</Link></li>
                   </ul>
                </li>
              </div>
            ) : (
              <div className='login-container'>
                <li className='login'><FontAwesomeIcon icon={faUser} /> Hello, <b>{this.context.customer.name}</b>
                  <ul className='sub-login'>
                    <li><Link to='/logout' onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link></li>
                    <li><Link to='/myprofile'>Tài khoản</Link></li>
                    <li><Link to='/myorders'>Đơn hàng</Link></li>
                  </ul>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="float-clear" />
      </div>
    );
  }

 // event-handlers
 btnSearchClick(e) {
  e.preventDefault();
  this.props.navigate('/product/search/' + this.state.txtKeyword);
}
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default withRouter(Inform);
