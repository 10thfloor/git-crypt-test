const bcrypt = require('bcrypt-nodejs');

const {
	STRING,
	INTEGER
} = require('sequelize');

const User = ({ db }) => db.define('user', {
  name: {
    type: STRING,
  },
  githubId: {
    type: INTEGER,
    defaultValue: undefined,
  },
  email: {
    type: STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    set(password) {
      const salt = bcrypt.genSaltSync(8);
      const hash = bcrypt.hashSync(password, salt);
      this.setDataValue('password', hash);
    },
  },
}, {
  instanceMethods: {
    verifyPassword(password) {
      return bcrypt.compareSync(password, this.password);
    },
  },
});

module.exports = User;