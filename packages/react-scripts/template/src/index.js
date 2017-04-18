import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '1px solid #555',
  borderRadius: 5,
  backgroundColor: 'hotpink',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
