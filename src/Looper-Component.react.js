const LooperComponent = ({ items, render }) =>
  items.map((item, index) => render(item, index));

export default LooperComponent;
