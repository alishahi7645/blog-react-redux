import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = (e) =>{
    e.preventDefault();
    localStorage.clear();
    navigate('/login')
  }
  return (
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
     <div className="container">
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <NavLink className="nav-link" aria-current="page" to='/'>خانه</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="login">ورود</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to='/register'>ثبت نام</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to='/blog'>ارسال بلاگ</NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to='/logout' onClick={logout}>خروج</NavLink>
           </li>
         </ul>
       
       </div>

       <a className="navbar-brand" href="#">Blog</a>
     </div>
   </nav>
  )
}

export default Navbar