import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BodyHeader from '../../components/BodyHeader';

const BodyHeaderContent = () => <p>This is some body header content</p>;

test('BodyHeader', () => {
  const component = shallow(<BodyHeader><BodyHeaderContent /></BodyHeader>);

  expect(toJson(component)).toMatchSnapshot();
});
