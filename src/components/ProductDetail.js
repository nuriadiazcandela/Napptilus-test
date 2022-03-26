import React, { useState, useEffect } from 'react';
import getDataFromApi from '../services/GetDataFromApi';
import { useParams, Link } from 'react-router-dom';
import '../stylesheet/productDetail.scss';

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

  return (
    <>
      {productDetail.map((item) => (
        <article key={item.id} className="product">
          <h2>{item.model}</h2>
          <div className="product_image">
            <img src={item.img} alt="" />
          </div>
          <div className="product_description">
            <h3>{item.price} €</h3>
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
                Bateria: <span>{item.battery}</span>
              </li>
              <li>
                Dimensiones: <span>{item.dimentions}</span>
              </li>
              <li>
                Peso: <span>{item.weight}</span>
              </li>
            </ul>
          </div>
          <div className="product_actions"></div>
        </article>
      ))}
      <Link className="back_home" to="/">
        Volver a la página de inicio
      </Link>
    </>
  );
};
