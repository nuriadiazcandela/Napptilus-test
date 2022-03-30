import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import '../stylesheet/header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header_title">
          <FontAwesomeIcon icon={faMobileRetro} className="icon_title" />
          Only Phones
        </h1>
      </Link>
      <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>(0)</span>
      </div>
    </header>
  );
};
