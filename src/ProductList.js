import React from 'react';

import axios from 'axios';

export default class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/boardwallfloor/product_api/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        { this.state.products.map(products => <li>{products.product_name} Price : Rp.{products.price}</li>)}
      </ul>
    )
  }
}