import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ArticleList from '../../Components/ArticleList';

const articles = [
  {
    node: {
      frontmatter: {
        excerpt: 'This is an excerpt',
        path: '/article-1',
        title: 'Article one',
      },
    },
  },
  {
    node: {
      frontmatter: {
        excerpt: 'This is an excerpt',
        path: '/article-2',
        title: 'Article two',
      },
    },
  },
];

test('ArticleList', () => {
  const component = shallow(<ArticleList articles={articles} />);

  expect(toJson(component)).toMatchSnapshot();
});
