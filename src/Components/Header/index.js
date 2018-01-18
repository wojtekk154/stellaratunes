/* eslint-disable no-tabs,no-undef,react/prefer-stateless-function,no-alert,prefer-destructuring */
import React from 'react';
import './styles.css';
import logo from './logo.svg';
import Button from '../Button/index';
import Input from '../Input/index';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <h1 className="title">Stellaratunes</h1>
      <Input />
      <Button type="primary">Search</Button>
    </div>
  );
}

export default Header;
