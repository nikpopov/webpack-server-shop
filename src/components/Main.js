import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

function Main(props) {

    const dispatch = useDispatch();
    const products = useSelector(state => state.shop.products);

    useEffect(() =>{
      fetch('http://localhost:7070/getProducts')
        .then(response => response.json())
        .then(data => dispatch({
          type: "setProducts",
          payload: data
        }))
    }, []);

    console.log('Products: ', products);

    const renderProductList = () => {
      if (products && products.length > 0) {
        return (
          products.map((el, i) => {
            const { productName, productDescription, productPrice, productGroup } = el;
            return (
              <tr key = {i}>
                <td>{productName}</td>
                <td>{productDescription}</td>
                <td>{productPrice}</td>
                <td>{productGroup}</td>
              </tr>
            );
          })
        );
      } else {
        return (
          <tr>
            <td>Nothing inside</td>
          </tr>
        );
      }
    };

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Group</th>
            </tr>
          </thead>
          <tbody>
            {renderProductList()}
          </tbody>
        </table>
      </div>
    );
}

export default Main;