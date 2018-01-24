/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Input(props) {
  return (
    <div className="form-group">
      { props.label &&
      <label
        className={`form-label ${props.size} ${props.error ? 'has-error' : ''}`}
        htmlFor={props.name}
      >
        {props.label}
      </label>
      }
      {
        props.type !== 'textarea'
          ? <input
            className={`form-control ${props.size} ${props.error ? 'has-error' : ''}`}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onInputChange}
          />
          : <textarea
            className={`form-control ${props.size} ${props.error ? 'has-error' : ''}`}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onInputChange}
          />
      }
      {
        props.error && <span className="form-error-message">{props.error}</span>
      }
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  error: PropTypes.string,
  onInputChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  size: 'medium'
};

export default Input;
