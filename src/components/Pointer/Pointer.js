import React from "react";
import PropTypes from "prop-types";
import './Pointer.scss';

function Pointer({ text = 0 }) {

  return <div className="pointer-container">{Math.round(text)} KM</div>;
}

Pointer.propTypes = {

  text: PropTypes.number.isRequired,
  
};

export default Pointer;
