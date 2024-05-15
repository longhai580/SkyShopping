import axios from 'axios';
import React, { Component } from 'react';
import '../styles/Active.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div className="align-center-active">
        <div className='active-wrapper'>
        <form>
        <h2 className="text-center-active">KÍCH HOẠT TÀI KHOẢN</h2>
          <div className='input-box-active'>
          <input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }}  placeholder="ID" />
            <FontAwesomeIcon icon={faAddressCard} className='icon-active' />
            <div className='input-box-active'>
            <input type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }}   placeholder="Token"/>
            <FontAwesomeIcon icon={faKey} className='icon-active' />
            </div>
          </div>
          <input  className='btn-active-submit'type="submit" value="KÍCH HOẠT" onClick={(e) => this.btnActiveClick(e)} />
        </form>
        </div>
        
      </div>
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;