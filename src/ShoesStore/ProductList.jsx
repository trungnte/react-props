import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

  renderShoesList = () => {
    return this.props.listShoes.map((shoesMap) => {
      return  <div className="col-4 my-3" key={shoesMap.id}>
                <ProductItem shoes={shoesMap}/>
              </div>
    });
  }


  render() {
    return (
      <div className="row">
        {this.renderShoesList()}
      </div>
    )
  }
}
