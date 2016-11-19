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
export default class RegisterPage extends Component {
  render(){
    return(
      <div className="register-box">
        <div className="login-box-body">
            <div className="login-panel">
                <div className="login-logo">
                    <a href="http://getrux.in/home" className="logo-text"><span>GE</span>TRUX</a>
                </div>
                <p className="login-box-msg">Register a new membership</p>
                <div className="panel-body">
                    <form role="form">
                      <div className="form-group has-feedback">
                        <input type="text" className="form-control" name="name" value="" placeholder="Full Name" />
                        <span className="glyphicon glyphicon-user form-control-feedback"></span>
                      </div>
                      <div className="form-group has-feedback">
                        <input type="email" className="form-control" name="email" value="" placeholder="Email" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                     </div>
                    <div className="form-group has-feedback">
                        <input type="number" className="form-control" name="mobile" value="" placeholder="Mobile" />
                        <span className="glyphicon glyphicon-phone form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" name="password" placeholder="Password" />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" name="password_confirmation" className="form-control" placeholder="Confirm password" />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                    <input type="checkbox" /> I agree to the <a href="#">terms</a>
                                </label>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                        </div>
                    </div>
                  </form>
                    <a href="/"></a><br />
                    <Link to="/login" activeClassName="active">I already have a membership</Link> <br/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
