import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Card from '../../packages/patterns/Card';

import './styles.scss';

const ArticleList = ({ articles }) => (
  <section className="articleList">
    {articles.map((article, index) => {
      const { node: { frontmatter } } = article;
      const { excerpt, path, title } = frontmatter;

      return (
        <article className="article" key={index}>
          <Card>
            <header>
              <h3>
                <Link to={path}>{title}</Link>
              </h3>
            </header>
            <div className="articleContent">
              <p>{excerpt}</p>
            </div>
          </Card>
        </article>
      );
    })}
  </section>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        excerpt: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })).isRequired,
};

export default ArticleList;