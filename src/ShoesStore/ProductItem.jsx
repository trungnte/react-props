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
          <p className="card-text">{shoes.shortDescription}</p>
          <button onClick={() => {
            this.props.viewDetail(shoes);
          }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View Detail</button>
        </div>
      </div>
    )
  }
}
