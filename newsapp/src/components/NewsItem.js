import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description,imageUrl,newsUrl} = this.props ;
    return (
      
      <div className='my-3'>
        <div className="card" style={{width : "18rem"}}>
      <img src={!imageUrl?"https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read MORE</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem