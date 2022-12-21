import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let shoes = this.props.shoes;
    // render one Card
    return (
      <div className="card">
        <img src={shoes.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{shoes.name}</h5>
          <p className="card-text">{shoes.description}</p>
          <a href="#" className="btn btn-primary">View Detail</a>
        </div>
      </div>
    )
  }
}
