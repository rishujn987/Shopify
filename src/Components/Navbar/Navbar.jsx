import './navbar.css';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import nav_dropdown from '../../Assets/nav_dropdown.png';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className="navbar">
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '30px', fontWeight: '700', fontFamily: 'Poppins, sans-serif', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" />
                    <span style={{ color: '#333' }}>Shopify</span>
                  
                </Link>
            </div>

      <img
        className="nav_dropdown"
        src={nav_dropdown}
        alt=""
        onClick={dropdown_toggle}
      />

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link to="/">Shop </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('mens');
          }}
        >
          <Link to="/mens">Men </Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('womens');
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids');
          }}
        >
          <Link to="/kids">Kids </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
