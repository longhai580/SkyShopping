import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import '../styles/profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


class Myprofile extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
    };
  }
  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    return (
      <div className="align-center-profile">
        <div className='profile-wrapper'>
        <form>
        <h2 className="text-center-login">THÔNG TIN TÀI KHOẢN</h2>
          <div className='input-box-profile'>
            <input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}  placeholder="Tên tài khoản" />            
            <FontAwesomeIcon icon={faUser} className='icon-profile' />
          </div>
          <div className='input-box-profile'>
            <input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}  placeholder="Mật khẩu"/>
            <FontAwesomeIcon icon={faLock} className='icon-profile' />
          </div>
          <div className='input-box-profile'>
            <input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }}  placeholder="Họ và tên" />
            <FontAwesomeIcon icon={faAddressCard} className='icon-profile' />
          </div>
          <div className='input-box-profile'>
            <input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }}  placeholder="Số điện thoại" />
            <FontAwesomeIcon icon={faPhone} className='icon-profile' />
          </div>
          <div className='input-box-profile'>
            <input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }}  placeholder="Email" />
            <FontAwesomeIcon icon={faEnvelope} className='icon-profile' />
          </div>
          
            <input  className='btn-profile-submit'type="submit" value="UPDATE" onClick={(e) => this.btnUpdateClick(e)} />
          
        </form>
        </div>
        
      </div>
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      this.setState({
        txtUsername: this.context.customer.username,
        txtPassword: this.context.customer.password,
        txtName: this.context.customer.name,
        txtPhone: this.context.customer.phone,
        txtEmail: this.context.customer.email
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const customer = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiPutCustomer(this.context.customer._id, customer);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiPutCustomer(id, customer) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.put('/api/customer/customers/' + id, customer, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.context.setCustomer(result);
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Myprofile;