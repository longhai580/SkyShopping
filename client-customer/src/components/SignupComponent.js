import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineAssignmentInd } from "react-icons/md";
class Signup extends Component {
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
    return (
      <div className="align-center-signup">
       <div className='signup-wrapper'>
        <form>
        <h2 className="text-center-login">ĐĂNG KÍ TÀI KHOẢN</h2>
          <div className='input-box-signup'>
            <input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}  placeholder="Tên tài khoản" />            
            <FontAwesomeIcon icon={faUser} className='icon-signup' />
          </div>
          <div className='input-box-signup'>
            <input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}  placeholder="Mật khẩu"/>
            <FontAwesomeIcon icon={faLock} className='icon-signup' />
          </div>
          <div className='input-box-signup'>
            <input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }}  placeholder="Họ và tên" />
            <MdOutlineAssignmentInd className='icon-signup' />
          </div>
          <div className='input-box-signup'>
            <input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }}  placeholder="Số điện thoại" />
            <FontAwesomeIcon icon={faPhone} className='icon-signup' />
          </div>
          <div className='input-box-signup'>
            <input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }}  placeholder="Email" />
            <FontAwesomeIcon icon={faEnvelope} className='icon-signup' />
          </div>
          <div className='remember-forgot-signup'>
            <label><input type='checkbox'/>Tôi đòng ý với các điều khoản bảo mật cá nhân</label>
          </div>
          <input className='btn-signup-submit' type="submit" value="ĐĂNG KÍ" onClick={(e) => this.btnSignupClick(e)} />
          <div className='register-link-signup'>
            <p>Bạn đã có tài khoản?<Link to='/login'>Đăng nhập ngay</Link></p>
          </div>
        </form>
        </div>
      
      </div>
    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;