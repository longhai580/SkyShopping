import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faMapMarkerAlt, faEnvelope,faPhone  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Gmap from './GmapComponent';
import '../styles/Footer.scss'
import applestore from '../img/applestore.png';
import qr from '../img/qr.png'
import ggplay from '../img/ggplay.png'
import appgalarry from '../img/appgalarry.png'
import visa from '../img/visa.png';
import master from '../img/master.png';
import american from '../img/american.png';
import jcb from '../img/jcb.png';
import cod from '../img/cod.png';
import spay from '../img/spay.png';






class Footer extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  
  render() {
   

  
    return (
        <div className='footer-container'>
            <div className="row  footer-body-row justify-content-center">
                <div className='col-4 footer-support '>
                    <div className="support-container">

                            <div className="footer-support-title">
                                <p>Chăm sóc khách hàng </p>
                            </div>
                            <div className="footer-support-content">
                                <ul className="support_">
                                    <li className="support-item">
                                        Trung tâm trợ giúp 
                                    </li>
                                    <li className="support-item">
                                        Chính sách bảo hành 
                                    </li>
                                    <li className="support-item">
                                        Chăm sóc khách hàng 
                                    </li>
                                    <li className="support-item">
                                        Tình trạng đơn hàng 
                                    </li>
                                    <li className="support-item">
                                        Thanh toán 
                                    </li>
                                    
                                </ul>

                            </div>
                    </div>
                    <div className="support-container about-shop">

                            <div className="footer-support-title ">
                                <p> Về SkyShop</p>
                            </div>
                            <div className="footer-support-content">
                                <ul className="support_">
                                    <li className="support-item">
                                       Giới thiệu về SkyShop
                                    </li>
                                    <li className="support-item">
                                        Tuyển dụng  
                                    </li>
                                    <li className="support-item">
                                        Chính sách bảo mật
                                    </li>
                                    <li className="support-item">
                                        Điều khoản SkyShop  
                                    </li>
                                    <li className="support-item">
                                        Chính hãng 
                                    </li>
                                    
                                </ul>

                            </div>
                    </div>


                </div>
            <div className='col-4 footer-contact'>
                <div className="contact-container">
                        <div className='contact-title'>
                            Liên hệ với chúng tôi 
                        </div>
                        <div className='contact-content'>
                            <div className='contact-item'>
                                <span className='contact-icon'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon-contact' />

                                </span>
                                <span className='contact-name'>
                                        Ho Chi Minh, 70000, VN
                                </span>
                            </div>
                            <div className='contact-item'>
                                <span className='contact-icon'>
                                    <FontAwesomeIcon icon={faPhone} className='icon-contact' />
                                </span>
                                <span className='contact-name'>
                                    +84 0990909
                                </span>
                            </div>
                            <div className='contact-item'>
                                <span className='contact-icon'>
                                <FontAwesomeIcon icon={faEnvelope} className='icon-contact' />
                                </span>
                                <span className='contact-name'>
                                    skyshop@gmail.com
                                </span>
                            </div>
                            <div className='contact-item'>
                                <span className='contact-icon'>
                                <FontAwesomeIcon icon={faFacebookSquare}  className='icon-contact' />
                                </span>
                                <span className='contact-name'>
                                    Facebook
                                </span>
                            </div>
                            <div className='contact-item'>
                                <span className='contact-icon'>
                                <FontAwesomeIcon icon={faInstagram} className='icon-contact' />                                </span>
                                <span className='contact-name'>
                                    Instagram
                                </span>
                            </div>
                            <div className='contact-item'>
                                <span className='contact-icon'>
                                    <FontAwesomeIcon icon={faYoutube} className='icon-contact' />
                                </span>
                                <span className='contact-name'>
                                    Youtube
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-container pay-method">
                        <div className='contact-title'>
                            Thanh toán 
                        </div>
                        <div className='pay-content'>
                            <div className=" app-pay-item">
                            
                                <span className='pay-icon'>
                                <img src={visa}/>
                                </span>
                
                                <span className='pay-icon icon-second'>
                                <img src={master} />

                                </span>
                                
                            </div>
                            <div className=" app-pay-item app-jcb">
                                    <span className='pay-icon'>
                                        <img src={jcb}/>
                                    </span>
                                  
                                    <span className='pay-icon icon-second'>
                                        <img src={american} />
                                    </span>
                                    
                            </div>
                            <div className=" app-pay-item app-jcb">
                                    <span className='pay-icon'>
                                        <img src={cod}/>
                                    </span>
                                    
                                   
                                    <span className='pay-icon icon-second'>
                                        <img src={spay}/>
                                    </span>
                                    
                            </div>
                     
                        </div>
                </div>
            </div>
                <div className='col-2 app-footer '>
                    <div className="footer-app-title">
                        Tải ứng dụng SkyShop 
                    </div>
                    <div className="footer-app-content">
                        <div className="app-qr">
                            <span className="app-qr_download">
                            <img src={qr}/>

                            </span>
                        </div>
                        <div className="app-link">
                            <div className="app-link-item">
                                <span className='app-link-icon'>
                                <img src={applestore}/>

                                </span>
                                <span clasName="app-link-name">

                                </span>
                            </div>
                            <div className="app-link-item app-gg">
                                <span className='app-link-icon'>
                                <img src={ggplay}/>

                                </span>
                                <span clasName="app-link-name">
                                    
                                </span>
                            </div>
                            <div className="app-link-item app-gala">
                                <span className='app-link-icon'>
                                    <img src={appgalarry}/>
                                </span>
                                <span clasName="app-link-name">
                                    
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='col-12 footer-end'>
                        <div>&copy; 2023 - Bản quyền thuộc về Công ty TNHH SkyShop</div>
                </div>
            </div>
           
        </div>
    );
  }
 
  
}
export default withRouter(Footer);