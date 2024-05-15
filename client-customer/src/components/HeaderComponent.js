import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.scss'
import logo6 from '../img/logo6.png'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IoIosLaptop } from "react-icons/io";
import { faTv, faMoon} from '@fortawesome/free-solid-svg-icons';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import { IoWatchOutline } from "react-icons/io5";
import { BsUsbPlug } from "react-icons/bs";
import { SlScreenTablet } from "react-icons/sl";
import { PiDesktopTower} from "react-icons/pi";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { RiMegaphoneLine } from "react-icons/ri";
class Header extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  
  render() {
    // menu
    const cates = this.state.categories.map((item) => {
      let categoryIcon;
      switch (item.name.toLowerCase()) {
        case 'iphone':
          categoryIcon = <IoPhonePortraitOutline />;
          break;
        case 'macbook':
          categoryIcon = <IoIosLaptop />;
          break;
        case 'ipad':
          categoryIcon = <SlScreenTablet />;
          break;
        case 'tai nghe':
          categoryIcon = <ImHeadphones />;
          break;
        case 'đồng hồ':
          categoryIcon = <IoWatchOutline />;
          break;
        case 'pc':
          categoryIcon = <PiDesktopTower />;
          break;
        case 'phụ kiện':
          categoryIcon = <BsUsbPlug />;
          break;
        case 'tivi':
          categoryIcon = <FontAwesomeIcon icon={faTv} />;
          break;
        case 'thu cũ đổi mới':
          categoryIcon = <TbDeviceMobileDollar /> ;
          break;
        case 'khuyến mãi':
          categoryIcon = <RiMegaphoneLine /> ;
          break;
        
        
      }
      return (
          <li key={item._id} className="menu-item-name">
              <a href={'/product/category/' + item._id}>
              {categoryIcon}
              {item.name}
            </a>
      </li>
        
       
    );
  });
    const { mycart } = this.context;

  
    return (
      <div className="header-container">
        <div className='header-body'>


          <nav class="navbar navbar-expand-lg bg-light">
            {/* Logo */}
                  <div class="container-fluid">
                    <span className="SKYSHOP">
                    </span>
              <button class="navbar-toggler"
             
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse header-content" id="navbarSupportedContent">
                
                 <div className='header-content-top'>
                <div class=" header-search-container d-flex  align-items-center">
                    <form className="d-flex  header-search-body" role="search">
                      <input class="form-control me-2" type="search" placeholder="Sản phẩm cần tìm?"
                        value={this.state.txtKeyword}
                        onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} aria-label="Search" />
                      <button class="btn btn-outline-success btn-search-item"
                        onClick={(e) => this.btnSearchClick(e)} >Search </button>
                    </form>
                  </div >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 header-content-item" >
                    <li className='nav-item '> 

                     </li>
                      <li class="nav-item header-support">
                        <Link to='/'><FontAwesomeIcon icon={faPhoneVolume} className="icon-support" /> </Link> 
                        <span className="header-support-title">Hotline</span>
                      </li> 
                       <li class="nav-item header-cart ">
                        <span className="header-cart-icon">
                          
                          </span>
                          <Link to='/mycart'><FontAwesomeIcon icon={faCartArrowDown}  className="icon-up"/>
                          <span className="cart-title">Giỏ hàng </span>
                          {mycart.length > 0 && (
                            <span className="item-count">{mycart.length}</span>
                          )}</Link> 
                      </li> 
                
                     <li class="nav-item dropdown header-login">
                      {this.context.token === '' ? (
                    <div class="dropdown dp-login-container">
                          <span class=" dropdown dp-login-body" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="dp-login-icon">
                            <FontAwesomeIcon icon={faUser} />
                            </span>
                
                            <span className='dp-login-title'>
                              Đăng nhập
                            </span>  
                          </span>
                          <ul class="dropdown-menu dp-login-child">
                            <li class="dropdown-item dp-login-item"><Link to='/login'>Đăng nhập</Link></li>
                            <li class="dropdown-item dp-login-item "><Link to='/signup'>Đăng kí</Link></li>
                            <li class="dropdown-item dp-login-item "><Link to='/active'>Kích hoạt</Link></li>
                          </ul>
                  </div>
              //  <div className='login-container'>
              //    <li className='login'><FontAwesomeIcon icon={faUser} /> Đăng nhập
              //       <ul className='sub-login'>
              //         <li><Link to='/login'>Đăng nhập</Link></li>
              //         <li><Link to='/signup'>Đăng kí</Link></li>
              //           <li><Link to='/active'>Kích hoạt</Link></li>
              //         </ul>
              //      </li>
              //   </div>
                      ) : (
                        <div class="dropdown dp-login-container">
                        <span class=" dropdown dp-login-body" data-bs-toggle="dropdown" aria-expanded="false">
                          <span className="dp-login-icon">
                          <FontAwesomeIcon icon={faUser} /> Hello, <b>{this.context.customer.name}</b>
                          </span>
              
                           <span className='dp-login-title'>
                            Đăng nhập
                          </span>   
                         </span>
                        <ul class="dropdown-menu dp-login-child">
                          <li class="dropdown-item dp-login-item"><Link to='/logout' onClick={() => this.lnkLogoutClick()}>Đăng xuất</Link></li>
                          <li class="dropdown-item dp-login-item "><Link to='/myprofile'>Tài khoản</Link></li>
                          <li class="dropdown-item dp-login-item "><Link to='/myorders'>Đơn hàng</Link></li>
                        </ul>
                        </div>
   
              )}
                    </li>                  
                    </ul>
                    </div> 
                   
                     {/* <div className="d-flex header-menu"> 
                      
                         <ul className="menu-item">
                          {cates}
                          <div style={{ display: "inline" }} class="form-switch">
                              <input class="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)} />&nbsp; Light / Dark mode
                            </div>
                        </ul> 
                  {/* Meu  */}
                      {/* </div> */} 
              </div> 
                 </div>   

           </nav>
           
        </div>
      </div>
    );
  }
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
   
  
  // Menu 

  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
    // event-handlers
    ckbChangeMode(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
      }
    }
  
}
export default withRouter(Header);