import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import { AiFillHome } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import '../styles/Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  render() {
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
        <li key={item._id} className="menu">
        <Link to={'/product/category/' + item._id}>
          {categoryIcon}
          {item.name}
        </Link>
      </li>
    );
  });
    return (
      <div className="col-12 d-flex justify-content-center menu-border-bottom">
        <div className="menu-float-left">
          <ul className="menu">
            {cates}

            <div style={{ display: "inline" }} class="form-switch">
              {/* <span class="form-check-input" onChange={(e) => this.ckbChangeMode(e)} >
              <FontAwesomeIcon icon={faMoon} />
              </span> */}
        <input class="form-check-input" type="checkbox" onChange={(e) => this.ckbChangeMode(e)} />&nbsp; Light / Dark mode
      </div>
          </ul>
        </div>
        <div className="float-right">
          
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
export default withRouter(Menu);