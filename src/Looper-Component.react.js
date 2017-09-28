import React from 'react';
import PropTypes from 'prop-types';

const isFiber = React.version.indexOf('16') > -1;
const isObject = items => typeof items === 'object';

const LooperComponent = ({ items, children: wrapperChildren }) => {
  if (items === null || children === null) return null;

  let children;

  if (items.length) {
    children = items.map((item, index) => wrapperChildren(item, index));
  }

  if (isObject(items)) {
    const keys = Object.keys(items);
    children = keys.map((key, index) => wrapperChildren(items[key], index));
  }

  return isFiber ? children : <span>{children}</span>;
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
