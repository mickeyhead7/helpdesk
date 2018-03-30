import { uniq } from 'ramda';

const reduceArticleTags = (accumulator, article) => {
  const combined = accumulator.concat(article.node.frontmatter.tags);
  const uniqueTags = uniq(combined);

  return uniqueTags;
};

export const extractTagsFromMarkdown = articles => articles.reduce(reduceArticleTags, []);
