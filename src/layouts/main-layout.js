import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MainLayout extends Component {
    render(){
        return(
            <div className='main-container'>
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                              <main>
                                  {this.props.children}
                              </main>
                          </div>
                      </div>
                    </div>
            </div>
        )
    }
}
