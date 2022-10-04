import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
       
       <nav className={`navbar navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode==="light"?"light":"dark"}`}>
        
    
    
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">Text Editor</Link>
   
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {/* <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
      Change Theme
    </button>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" onClick={props.toggleModew}>Light</Link></li>
      <li><Link className="dropdown-item" onClick={props.toggleMode}>Dark</Link></li>
      <li><Link className="dropdown-item"  onClick={props.toggleModeg}>Green</Link></li>
     
    </ul>
  </div>
      
    </div>
  </div>
</nav>
    </div>
  )
}
