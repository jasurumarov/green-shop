import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// IMAGES
import SiteLogo from '../../images/site-logo.svg'
import { FiSearch } from 'react-icons/fi'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { IoLogOutOutline } from 'react-icons/io5'

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <header>
        <div className="container">
          <div className="header__content">
            <Link className='header-logo' to={"/"}>
              <img src={SiteLogo} alt="" />
            </Link>
            <ul className={menu ? "show" : ""}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"shop"}>Shop</NavLink>
              <NavLink to={"plant-care"}>Plant Care</NavLink>
              <NavLink to={"blogs"}>Blogs</NavLink>
            </ul>
            <div>
              <FiSearch />
              <Link to={"/cart"}>
                <RiShoppingCart2Line />
                <sup>0</sup>
              </Link>
              <button>
                <IoLogOutOutline />
                Login
              </button>
            </div>
            <button onClick={() => setMenu(p => !p)} className='menu-btn'>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header