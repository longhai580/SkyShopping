import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import '../styles/menu.css'
import { Link } from 'react-router-dom';
class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="menu-ad-border-bottom">
        <div className="menu-ad-float-left">
          <ul className="menuad">
            <li className="menuad"><Link to='/admin/home'>Trang chủ</Link></li>
            <li className="menuad"><Link to='/admin/category'>Category</Link></li>
            <li className="menuad"><Link to='/admin/product'>Product</Link></li>
            <li className="menuad"><Link to='/admin/order'>Order</Link></li>
            <li className="menuad"><Link to='/admin/customer'>Customer</Link></li>
          </ul>
        </div>
        <div className="float-right">
          Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;