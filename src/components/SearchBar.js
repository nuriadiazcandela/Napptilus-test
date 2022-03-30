import React, { useState, useEffect } from 'react';
import getDataFromApi from '../services/GetDataFromApi';
export const SearchBar = () => {
  const [filter, setFilter] = useState('');
  const [productModel, setProductModel] = useState([]);

  useEffect(() => {
    new getDataFromApi()
      .getProductList()
      .then((productModel) => {
        setProductModel(productModel);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);

  const handleSearchName = (ev) => {
    setFilter(ev.target.value);
  };

  return (
    <>
      <form className="search_product">
        <label htmlFor="model">Buscar:</label>
        <input type="text" name="model" id="model" value={filter} onChange={handleSearchName} />
      </form>
    </>
  );
};
