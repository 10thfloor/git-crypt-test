const {
	STRING,
	INTEGER
} = require('sequelize');

const Post = ({ db }) => db.define('post', {
  author: { type: STRING },
  votes: { type: INTEGER },
  title: { type: STRING },
  description: { type: STRING },
  link: { type: STRING },
});

module.exports = Post;

