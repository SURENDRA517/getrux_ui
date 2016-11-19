import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginHeader from '../components/header/login-header'
import '../styles/common/main'

export default class LoginLayout extends Component {
    render(){
        return(
          <div className='main-container'>
            <LoginHeader/>
            <div className="container-fluid">
              <div className="row">
                  <div className="container-fluid">
                      <main>
                          {this.props.children}
                      </main>
                  </div>
              </div>
            </div>
            <nav className="navbar navbar-default navbar-fixed-bottom">
               <div className="container">
                 <ul className="nav navbar-nav">
                     <li className="nav-bottom-list"><a href="#">About Us</a></li>
                     <li className="nav-bottom-list"><a href="#">Privacy Policy</a></li>
                     <li className="nav-bottom-list"><a href="#">Terms and Conditions</a></li>
                     <li className="nav-bottom-list"><a href="#">Copyright</a></li>
                     <li className="nav-bottom-list"><a href="#">FAQs</a></li>
                     <li className="nav-bottom-list"><a href="#">Help</a></li>
                     <li className="nav-bottom-list"><a href="#">GPS Enquiry</a></li>
                     <li className="nav-bottom-list"><a href="#">+91 9876512345</a></li>
                 </ul>
               </div>
            </nav>
          </div>
        )
    }
}
