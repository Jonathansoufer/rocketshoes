import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductionList } from './styles';

export default function Home() {
  return (
    <ProductionList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/10/E74-0492-010/E74-0492-010_detalhe2.jpg?ims=326x"
          alt="Rocketshoes"
        />
        <strong>Beautiful Shoe</strong>
        <span>50 €</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-breed-masculino/56/D22-1791-156/D22-1791-156_detalhe2.jpg?ims=326x"
          alt="Rocketshoes"
        />
        <strong>Beautiful Shoe</strong>
        <span>48 €</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 1
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_detalhe2.jpg?ims=326x"
          alt="Rocketshoes"
        />
        <strong>Beautiful Shoe</strong>
        <span>37 €</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-flex-essential-tr-feminino/26/D12-9111-026/D12-9111-026_detalhe2.jpg?ims=326x"
          alt="Rocketshoes"
        />
        <strong>Beautiful Shoe</strong>
        <span>50 €</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-infantil-disney-mickey-mouse/10/879-9800-010/879-9800-010_detalhe1.jpg?ims=326x"
          alt="Rocketshoes"
        />
        <strong>Beautiful Shoe</strong>
        <span>52 €</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/18/337-9918-118/337-9918-118_detalhe2.jpg?ims=326x"
          alt="Rocketshoes"
        />
        <strong>Beautiful Shoe</strong>
        <span>50 €</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 1
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
    </ProductionList>
  );
}
