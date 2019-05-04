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

const Step = ({ children, onClick }) => (
    <div style={styles}>
        step
    </div>
);

Step.displayName = 'Button';
Step.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Step.defaultProps = {
  onClick: () => {},
};

export default Step;
