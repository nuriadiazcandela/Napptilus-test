import React, { useState, useEffect } from 'react';
import getDataFromApi from '../services/GetDataFromApi';
import { useParams } from 'react-router-dom';
import '../stylesheet/productDetail.scss';

export const Storages = () => {
  const [storages, setStorages] = useState(['']);
  const [storageSelect, setStorageSelected] = useState();
  let { id } = useParams();

  useEffect(() => {
    new getDataFromApi()
      .getProductOptionsStorage(id)
      .then((storages) => {
        setStorages(storages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleStorage = (ev) => {
    setStorageSelected(ev.target.value);
  };

  return (
    <>
      <form className="product_options">
        <label htmlFor="storage">Selecciona el almacenamiento:</label>
        <select name="storage" id="storage" onChange={handleStorage}>
          {storages.map((storage, index) => (
            <option key={index} value={storage.name}>
              {storage.name}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};
