import React from 'react';
import PropTypes from 'prop-types';

const isFiber = React.version.indexOf('16') > -1;
const isObject = items => typeof items === 'object';

const LooperComponent = ({ items, children }) => {
  if (items === null || children === null) return null;

  let child;

  if (items.length) {
    child = items.map((item, index) => children(item, index));
  }

  if (isObject(items)) {
    const keys = Object.keys(items);
    child = keys.map((key, index) => children(items[key], index));
  }

  if (isFiber) {
    return child;
  } else {
    return <span>{child}</span>;
  }
};

LooperComponent.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  children: PropTypes.func
};
LooperComponent.defaultProps = {
  items: [],
  children: null
};

export default LooperComponent;
