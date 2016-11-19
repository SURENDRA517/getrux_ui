import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'
import '../../styles/header/login-header'

export default class LoginHeader extends Component{
    render(){
      return(
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div className="container nav-container">
                 <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" style={{fontSize:28}} href="#">
                      <span className="title" style={{color:'#FFC000',fontSize:'28px !important'}}>GE</span>TRUX
                    </a>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/login" activeClassName="active">Login</Link></li>
                        <li><Link to="/register" activeClassName="active">Register</Link></li>
                        <li><Link to="/" activeClassName="active">Packages</Link></li>
                        <li><Link to="/" activeClassName="active">Services</Link></li>
                        <li><Link to="/" activeClassName="active">Contact Us</Link></li>
                    </ul>
                  </div>
             </div>
          </nav>
      )
    }
}
