import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { Link } from 'react-router-dom';
import '../styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'sonkk',
      txtPassword: '123'
    };
  }
  render() {
    return (
      <div className="align-center-login">
        <div className='login-wrapper'>
        <form>
        <h2 className="text-center-login">ĐĂNG NHẬP</h2>
          <div className='input-box'>
          <input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}  placeholder="Tên tài khoản " />
            <FontAwesomeIcon icon={faUser} className='icon' />
            <div className='input-box'>
            <input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}  placeholder="Mật khẩu" />
            <FontAwesomeIcon icon={faLock} className='icon' />
            </div>
          </div>
          <div className='remember-forgot'>
            <label><input type='checkbox'/>Remember me</label>
            <a href='#'>Forgot password</a>
          </div>
          <input  className='btn-login-submit' type="submit" value="ĐĂNG NHẬP" onClick={(e) => this.btnLoginClick(e)} />
          <div className='register-link'>
            <p>Bạn chưa có tài khoản?<Link to='/signup'>Đăng kí ngay</Link></p>
          </div>
        </form>
        </div>
      </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);