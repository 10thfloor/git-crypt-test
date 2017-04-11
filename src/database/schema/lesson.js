const {
	STRING,
	DATEONLY
} = require('sequelize');

const Lesson = ({ db }) => db.define('lesson', {
  title: { type: STRING },
  date: { type: DATEONLY },
});

module.exports = Lesson;