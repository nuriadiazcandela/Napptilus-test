import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import getDataFromApi from '../services/GetDataFromApi';
import '../stylesheet/landing.scss';

export const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    new getDataFromApi()
      .getProductList()
      .then((productList) => {
        setProductList(productList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="container">
        <ul className="container_cards">
          {productList.map((product, index) => (
            <Link to={generatePath('detail/:id', { id: product.id })}>
              <li key={index} className="card">
                <h2>{product.brand}</h2>
                <h3>{product.model}</h3>
                <img src={product.img} alt=""></img>
                <span>{product.price}€</span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};
