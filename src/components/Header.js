import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import '../stylesheet/header.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header_title">
        <FontAwesomeIcon icon={faMobileRetro} className="icon_title" />
        Only Phones
      </h1>
      <FontAwesomeIcon icon={faCartShopping} />
      <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb">
        {/* {breadcrumbs} */}
      </Breadcrumbs>
    </header>
  );
};
