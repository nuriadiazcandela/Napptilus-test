import React, { useState, useEffect } from 'react';
import getDataFromApi from '../services/GetDataFromApi';
import { useParams, Link } from 'react-router-dom';
import '../stylesheet/productDetail.scss';
import { Breadcrumbs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Colors } from './Colors';
import { Storages } from './Storages';

export const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(['']);
  let { id } = useParams();

  useEffect(() => {
    new getDataFromApi()
      .getProductDetail(id)
      .then((productDetail) => {
        setProductDetail(productDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function handleButtonAddCart() {}
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
        <span className="last_breadcrumb">Detalle producto</span>
      </Breadcrumbs>
      {productDetail.map((item) => (
        <article key={id} className="product">
          <h2>{item.model}</h2>
          <div className="product_container">
            <div className="product_image">
              <img src={item.img} alt="" />
            </div>
            <div className="product_details">
              <div className="product_description">
                <h3> {item.price} € </h3>
                <ul>
                  <li>
                    Marca: <span>{item.brand}</span>
                  </li>
                  <li>
                    CPU: <span>{item.cpu}</span>
                  </li>
                  <li>
                    Ram: <span>{item.ram}</span>
                  </li>
                  <li>
                    Sistema operativo: <span>{item.os}</span>
                  </li>
                  <li>
                    Resolucion de pantalla: <span>{item.displayResolution}</span>
                  </li>
                  <li>
                    Bateria:<span>{item.battery}</span>
                  </li>
                  <li>
                    Dimensiones: <span>{item.dimentions}</span>
                  </li>
                  <li>
                    Peso: <span>{item.weight} gr.</span>
                  </li>
                  <li>
                    Cámara 1:
                    <span>{item.primaryCamera}</span>
                  </li>
                  <li>
                    Cámara 2: <span>{item.secondaryCamera}</span>
                  </li>
                </ul>
              </div>

              <div className="product_actions">
                <Colors></Colors>
                <Storages></Storages>
                <button className="addtoCart" onClick={handleButtonAddCart}>
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
