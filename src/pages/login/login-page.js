import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import '../../styles/common/style'

@connect( (store) => {
    return{
      // test: store.nowPlayingReducer.nowPlayingMovies
    }
})
export default class LoginPage extends Component {
  render(){
    return(
      <div className="login-box">
        <div className="login-box-body">
            <div className="login-panel">
                <div className="login-logo">
                    <a href="http://getrux.in/home" className="logo-text"><span>GE</span>TRUX</a>
                </div>
                <p className="login-box-msg">Sign in to start your session</p>
                <div className="panel-body">
                    <form role="form">
                      <div className="form-group has-feedback ">
                         <input type="text" className="form-control" name="mobile" value="" placeholder="Mobile Number" />
                         <span className="glyphicon glyphicon-phone form-control-feedback"></span>
                      </div>
                      <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Password" name="password" />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                      </div>
                      <div className="row">
                        <div className="col-xs-8">
                          <div className="checkbox icheck">
                            <label>
                              <input type="checkbox" name="remember" /> Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-4">
                           <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                      </div>
                    </form>
                    <a href="/"></a><br />
                    <Link to="/" activeClassName="active">I forgot my password</Link> <br/>
                    <Link to="/register" activeClassName="active">Register a new membership</Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
