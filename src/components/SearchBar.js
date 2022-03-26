// import React, { useState, useEffect } from 'react';
// import getDataFromApi from '../services/GetDataFromApi';

// export const SearchBar = () => {
//   //   const [searchBrand, setSearchBrand] = useState('');
//   const [searchName, setSearchName] = useState('');

//   const handleFormSubmit = (ev) => {
//     ev.preventDefault();
//   };

//   useEffect(() => {
//     new getDataFromApi.getProducList().then((response) => {
//       setSearchName(response);
//     });
//   }, [searchName]);

//   const handleSearchName = (ev) => {
//     setSearchName(ev.target.value);
//   };
//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label className="label" htmlFor="name">
//         Buscar:
//       </label>
//       <input
//         className="input"
//         type="text"
//         id="name"
//         value={searchName}
//         onChange={handleSearchName}
//       />
//     </form>
//   );
// };
