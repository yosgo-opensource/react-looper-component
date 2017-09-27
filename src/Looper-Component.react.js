import React from 'react';

const isFiber = React.version.indexOf('16') > -1;

const LooperComponent = ({ items, render }) => {
  if (items === null) return null;

  if (items.length) {
    const child = items.map((item, index) => render(item, index));
    if (isFiber) {
      return child;
    } else {
      return <span>{child}</span>;
    }
  }

  return null;
};

export default LooperComponent;
