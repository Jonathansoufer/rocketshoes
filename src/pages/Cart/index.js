import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <td>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/10/E74-0492-010/E74-0492-010_detalhe2.jpg"
              alt="Nike"
            />
          </td>
          <td>
            <strong>Awesome Nike runnnig</strong>
            <span>215€</span>
          </td>
          <div>
            <td>
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readonly value={1} />
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
          </div>
          <td>
            <strong> 300€ </strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Submit</button>
        <Total>
          <span>TOTAL</span>
          <strong>437,32€</strong>
        </Total>
      </footer>
    </Container>
  );
}
