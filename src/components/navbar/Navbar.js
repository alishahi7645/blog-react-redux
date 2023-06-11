import React from 'react'

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container">
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">خانه</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">ورود</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">ثبت نام</a>
           </li>
         </ul>
       
       </div>

       <a className="navbar-brand" href="#">Blog</a>
     </div>
   </nav>
  )
}

export default Navbar