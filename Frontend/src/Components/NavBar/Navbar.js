import React from 'react';
import {Outlet, NavLink} from 'react-router-dom'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import { logoutSusscess } from "../../redux/authSlice";
import "./navbar.css";

export default function Navbar() {
    
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let axiosJWT = createAxios(user,dispatch, logoutSusscess);
    const handleLogOut = () => {
        logOut(dispatch,navigate,id,accessToken,axiosJWT);
    };

  return (
    <React.Fragment>
            <div className='header'>
                <div id="header-1">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="#">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="header-2">
                        <div className="logo">
                                <div><NavLink to="/"><img src="/assets/Image/logo-navbar.png" id="logo-nav-bar" alt=''/></NavLink></div>
                        </div>
                        <input type="checkbox" id="nav_check" hidden />
                        <nav>
                            <div className="logo">
                                <div><NavLink to="/"><img src="/assets/Image/logo-navbar.png" id="logo-nav-bar" alt=''/></NavLink></div>
                            </div>
                            <ul>
                                <li>
                                <NavLink to="/" activeClassName="active" exact>
                                    HOME
                                </NavLink>
                                </li>
                                <li>
                                    <div>
                                        <NavLink to="/shop">SHOP</NavLink>
                                        <ul className="dropdown">
                                            <li><Link to="#">Donate</Link></li>
                                            <li><Link to="#">Trips</Link></li>
                                            <li><Link to="#">Ways To Give</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#">TAKE A TRIP</Link>
                                </li>
                                <li>
                                    <Link to="/blog">BLOG</Link>
                                </li>
                                <li>                      
                                <Link to="/">
                                    {user ? (
                                    <>
                                    <p className="navbar-user"><i className="fa-solid fa-user" style={{ color: '#0091FF', marginRight: 10 }} />
                                    Hi, <span> {user.username}</span></p>
                                    <div className="dropdown" style={{ position: 'absolute', top: '121px', left: '100' ,backgroundColor: 'white', borderRadius: '10px', width: '10%'}}>
                                        <Link to="#" style={{marginTop: '10px'}} >Profile</Link>
                                        <Link to="/cart">Cart <i class="fa-solid fa-cart-shopping"></i></Link>
                                        {user.admin === true &&
                                        <>
                                        <Link to="/manager">Manager</Link>
                                        <Link to="/stored">Stored</Link>
                                        <Link to="/create">Post new products</Link>
                                        </>
                                        }
                                        <Link to="/login" className="navbar-logout" style={{marginBottom: 10}} onClick={handleLogOut}>
                                        Log out
                                        </Link>
                                    </div>
                                    </>
                                    ) : (
                                    <>
                                    <NavLink activeClassName="active" to="/login" style={{height: 30, width: '80px' ,display: 'flex', alignItems: 'center', textAlign: 'left' ,fontSize: '18px'}}>
                                        Login </NavLink>
                                    </>
                                    )}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                            <label htmlFor="nav_check" className="hamburger">
                                <div />
                                <div />
                                <div />
                            </label>
                        </div>
                    </div>
            <Outlet/>
    </React.Fragment>
  )
}
