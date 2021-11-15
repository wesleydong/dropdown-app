import React from 'react';
import PropTypes from 'prop-types';

export default function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.width} height={props.width} stroke={props.color} strokeWidth="2" fill={props.fill} strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
  );
}

ChevronDown.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  fill: PropTypes.string,
};

ChevronDown.defaultProps = {
  color: '#fff',
  width: 20,
  fill: 'none'
};