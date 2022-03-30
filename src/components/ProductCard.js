import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import getDataFromApi from '../services/GetDataFromApi';
import '../stylesheet/landing.scss';

export const ProductCard = () => {
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    new getDataFromApi()
      .getProductList()
      .then((productList) => {
        setProductCard(productList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {productCard.map((product, id) => (
        <Link to={generatePath('detail/:id', { id: product.id })}>
          <li key={product.id} className="card">
            <h2>{product.brand}</h2>
            <h3>{product.model}</h3>
            <img src={product.img} alt=""></img>
            <span>{product.price}€</span>
          </li>
        </Link>
      ))}
    </>
  );
};
