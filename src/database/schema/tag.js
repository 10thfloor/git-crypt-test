const {
	STRING,
} = require('sequelize');

const Tag = ({ db }) => db.define('tag', {
  name: { type: STRING },
});

module.exports = Tag;