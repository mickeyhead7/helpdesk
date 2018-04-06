import { extractTagsFromMarkdown } from '../../helpers/content';

const articles = [
  {
    node: {
      frontmatter: {
        tags: ['tag-one', 'tag-two'],
      },
    },
  },
  {
    node: {
      frontmatter: {
        tags: ['tag-two', 'tag-three'],
      },
    },
  },
];

test('Extracting tags from articles should return a unique array', () => {
  const tags = extractTagsFromMarkdown(articles);
  const expected = ['tag-one', 'tag-two', 'tag-three'];

  expect(tags).toEqual(expected);
});
