const moduleAlias = require('module-alias');
const path = require('path');

const aliases = {
  '@articles': path.join(__dirname, 'src', 'articles'),
  '@Components': path.join(__dirname, 'src', 'Components'),
  '@layouts': path.join(__dirname, 'src', 'layouts'),
  '@templates': path.join(__dirname, 'src', 'templates'),
  '@packages': path.join(__dirname, 'src', 'packages'),
  '@pages': path.join(__dirname, 'src', 'pages'),
  '@src': path.join(__dirname, 'src'),
  '@store': path.join(__dirname, 'src', 'store'),
};

moduleAlias.addAliases(aliases);
moduleAlias();

module.exports = aliases;
