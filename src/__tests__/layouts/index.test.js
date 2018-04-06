import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from '../../layouts';

const search = 'foo';
const content = () => <p>Some content...</p>;

test('Header', () => {
  const component = shallow(<Layout search={search}>{content}</Layout>);

  expect(toJson(component)).toMatchSnapshot();
});
