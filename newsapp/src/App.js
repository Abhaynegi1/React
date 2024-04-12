import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='container my-3'>
          <h2>Top-Headlines</h2>
        <div className="row">
        <div className='col-md-4'>
          <NewsItem title="My title" description="My desc"/>
        </div>
        <div className='col-md-4'>
          <NewsItem title="My title" description="My desc"/>
        </div>
        <div className='col-md-4'>
          <NewsItem title="My title" description="My desc"/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

