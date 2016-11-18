import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

@connect( (store) => {
    return{
      // test: store.nowPlayingReducer.nowPlayingMovies
    }
})
export default class HomePage extends Component {
  render(){
    return(
        <div className='container-home'>
            <h2 className="page-header">Dashboard</h2>
        </div>
    )
  }
}
