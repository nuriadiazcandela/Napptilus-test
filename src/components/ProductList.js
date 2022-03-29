import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import getDataFromApi from '../services/GetDataFromApi';
import '../stylesheet/landing.scss';
import { Breadcrumbs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from './SearchBar';

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
      <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb">
        <Link to="/#">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
      </Breadcrumbs>
      <SearchBar></SearchBar>
      <section className="container">
        <ul className="container_cards">
          {productList.map((product) => (
            <Link to={generatePath('detail/:id', { id: product.id })}>
              <li key={product.id} className="card">
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
