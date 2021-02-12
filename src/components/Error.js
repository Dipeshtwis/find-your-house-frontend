import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ msg }) => (
  <div className="err-container">
    <p className="err">{msg}</p>
  </div>
);

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
