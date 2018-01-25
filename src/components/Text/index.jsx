import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Text({ children, heading, size }) {
  return (
    <div>
      {
        heading ? <h2 className={`heading ${size}`}>{children}</h2>
          : <p className={`text ${size}`}>{children}</p>
      }
    </div>
  );
}

Text.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Text.defaultProps = {
  heading: false,
  size: 'medium'
};

export default Text;
