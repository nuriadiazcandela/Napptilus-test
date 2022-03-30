import { Link } from 'react-router-dom';
import '../stylesheet/landing.scss';
import { Breadcrumbs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from './SearchBar';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
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
          <ProductCard></ProductCard>
        </ul>
      </section>
    </>
  );
};
