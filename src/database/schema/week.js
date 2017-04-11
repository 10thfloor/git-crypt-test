const {
	STRING,
	DATEONLY
} = require('sequelize');

const Week = ({ db }) => db.define('week', {
  title: { type: STRING },
  date: { type: DATEONLY },
});

module.exports = Week;