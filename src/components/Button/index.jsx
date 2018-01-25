import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Button({
  children, type, buttonType, disabled, loading, onButtonClick
}) {
  return (
    <button
      className={`btn btn-${type}`}
      disabled={disabled || loading}
      onClick={onButtonClick}
      type={buttonType}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onButtonClick: PropTypes.func
};

Button.defaultProps = {
  type: 'primary'
};

export default Button;
