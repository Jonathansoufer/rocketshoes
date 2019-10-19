import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductionList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductionList>
        {products.map(product => (
          <li>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 2
              </div>
              <span>Add to Cart</span>
            </button>
          </li>
        ))}
      </ProductionList>
    );
  }
}
