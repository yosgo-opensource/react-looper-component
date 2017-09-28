import 'core-js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import ReactLooperComponent from '../Looper-Component.react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<LooperComponent />', () => {
  it('wrapper <ReactLooperComponent />', () => {
    const wrapper = mount(
      <ReactLooperComponent items={[]}>{() => null}</ReactLooperComponent>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('<ReactLooperComponent /> render for 2 children by Array', () => {
    const arrItems = [{ name: 'Whien', age: 18 }, { name: 'Que', age: 25 }];
    const wrapper = mount(
      <ReactLooperComponent items={arrItems}>
        {({ name }, index) => <h1 key={index}>{name}</h1>}
      </ReactLooperComponent>
    );
    expect(wrapper.find('h1').length).toBe(2);
  });

  it('<ReactLooperComponent /> render for 2 children by Object', () => {
    const objItems = {
      user1: {
        name: 'Whien',
        age: 18
      },
      user2: {
        name: 'Que',
        age: 25
      }
    };
    const wrapper = mount(
      <ReactLooperComponent items={objItems}>
        {({ name }, index) => <h1 key={index}>{name}</h1>}
      </ReactLooperComponent>
    );
    expect(wrapper.find('h1').length).toBe(2);
  });

  it('<ReactLooperComponent /> children get correct props', () => {
    const arrItems = [{ name: 'Whien', age: 18 }, { name: 'Que', age: 25 }];
    const wrapper = mount(
      <ReactLooperComponent items={arrItems}>
        {({ name, age }, index) => (
          <div key={index}>
            <h1>{name}</h1>
            <h1>{age}</h1>
          </div>
        )}
      </ReactLooperComponent>
    );
    expect(wrapper.find('h1').get(0).props.children).toBe('Whien');
    expect(wrapper.find('h1').get(1).props.children).toBe(18);
    expect(wrapper.find('h1').get(2).props.children).toBe('Que');
    expect(wrapper.find('h1').get(3).props.children).toBe(25);
  });
});
