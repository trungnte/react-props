import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    let shoes = this.props.shoes;
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{shoes.name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">

              <div className="card">
                <img src={shoes.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{shoes.name}</h5>
                  <p className="card-text">
                    <span>Price </span>
                    {shoes.price}
                  </p>
                  <p className="card-text">
                    <span>Quantity </span>
                    {shoes.quantity}
                  </p>
                  <p className="card-text">{shoes.description}</p>
                </div>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
