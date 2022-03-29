import { useEffect, useState } from 'react';

export const SearchBar = () => {
  const [productModel, setProductModel] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSearchName = (ev) => {
    setFilter(ev.target.value);
  };

  useEffect(() => {
    fetch(`https://front-test-api.herokuapp.com/api/product/`)
      .then((response) => response.json())
      .then((json) => setProductModel(json));
  }, [filter]);

  //   console.log(setProductModel);
  //   console.log(productModel);

  return (
    <div>
      <form className="search_product">
        <label htmlFor="model">Buscar:</label>
        <input type="text" name="model" id="model" value={filter} onChange={handleSearchName} />
      </form>
      <ul>
        {/* {productModel.map((product, index) => (
          <li key={index}>{product.model}</li>
        ))} */}
      </ul>
    </div>
  );
};
