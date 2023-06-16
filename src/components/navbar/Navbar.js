import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
     <div className="container">
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to='/'>خانه</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="login">ورود</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to='/register'>ثبت نام</Link>
           </li>
         </ul>
       
       </div>

       <a className="navbar-brand" href="#">Blog</a>
     </div>
   </nav>
  )
}

export default Navbar