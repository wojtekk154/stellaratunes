/* eslint-disable no-tabs,no-undef,react/prefer-stateless-function,no-alert,prefer-destructuring */
import React from 'react';
import './styles.css';
import logo from './logo.svg';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <h3 className="title">Stellaratunes</h3>
      <input type="text"/>
      <button className="btn">test</button>
    </div>
  );
}

export default Header;
