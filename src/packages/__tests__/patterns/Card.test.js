import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from '../../patterns/Card';

const Content = () => <p>This is some content...</p>;

test('Card', () => {
  const component = shallow(<Card><Content /></Card>);

  expect(toJson(component)).toMatchSnapshot();
  expect(component.find(Content)).toHaveLength(1);
});
