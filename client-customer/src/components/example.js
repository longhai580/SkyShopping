<nav class="navbar-top navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid container-top">
<span className="navbar-brand">SKYSHOP</span>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
  <div class=" collapse navbar-collapse menu-top" id="navbarSupportedContent">
    <div classNme="navbar-nav me-auto mb-2 mb-lg-0 menu- ">
      <ul className="men-item">
        {cates}
      </ul>
 
    </div>
    <div class=" header-search-container d-flex  align-items-end">
        <form className="d-flex  header-search-body" role="search">
          <input class="form-control me-2" type="search" placeholder="Sản phẩm cần tìm?"
            value={this.state.txtKeyword}
            onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} aria-label="Search" />
          <button class="btn btn-outline-success btn-search-item"
            onClick={(e) => this.btnSearchClick(e)} >Search </button>
        </form>
      </div >
  
</div>
</div>
</nav>
<nav class="navbar-bottom navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
{/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button> */}
<div class="collapse navbar-collapse header-bottom-support" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
  
              {/* <span className='dp-login-title'>
                Đăng nhập
              </span>   */}
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
</div>
</nav>