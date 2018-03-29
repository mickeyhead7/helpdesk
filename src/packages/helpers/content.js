import { uniq } from 'ramda';

const reduceArticleTags = (accumulator, article) => {
  accumulator = accumulator.concat(article.node.frontmatter.tags);

  const uniqueTags = uniq(accumulator);

  return uniqueTags;
}

export const extractTagsFromMarkdown = articles => articles.reduce(reduceArticleTags, []);
