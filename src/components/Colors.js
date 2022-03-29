import React, { useState, useEffect } from 'react';
import getDataFromApi from '../services/GetDataFromApi';
import { useParams } from 'react-router-dom';
import '../stylesheet/productDetail.scss';

export const Colors = () => {
  const [colors, setColors] = useState(['']);
  const [colorSelect, setColorSelected] = useState();
  let { id } = useParams();

  useEffect(() => {
    new getDataFromApi()
      .getProductOptionsColors(id)
      .then((colors) => {
        setColors(colors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleColor = (ev) => {
    setColorSelected(ev.target.value);
    console.log(setColorSelected);
  };

  return (
    <>
      <form className="product_options">
        <label htmlFor="color">Selecciona el color:</label>
        <select name="color" id="color" onChange={handleColor}>
          {colors.map((color) => (
            <option key={color.code} value={color.code}>
              {color.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
