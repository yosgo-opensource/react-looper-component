import React from 'react';

const LooperComponent = ({ items, render }) => {
  if (items === null) return null;

  if (items.length) {
    return <span>{items.map((item, index) => render(item, index))}</span>;
  }

  return null;
};

export default LooperComponent;
