import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Stepper = ({ children, onClick }) => (
  <div onClick={onClick} style={styles} type="button">
    {children}
  </div>
);

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Stepper.defaultProps = {
  onClick: () => {},
};

export default Stepper;
