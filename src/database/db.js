const Sequelize = require('sequelize');

const schema = {
  Lesson: require('./schema/lesson'),
  Post:  require('./schema/post'),
  Tag: require('./schema/tag'),
  User: require('./schema/user'),
  Week: require('./schema/week'),
}

const createRelations = require('./relations');
const createStubData = require('./stub');

const {
  DB_NAME,
  DB_USER,
  DB_PWD,
  DB_HOST
} = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: console.log,
  pool: {
    max: 5,
    min: 0,
    idle: 100000,
  },
});

for(model in schema) {
  schema[model] = schema[model]({ db });
}

createRelations(schema);

if(!process.env.PRODUCTION)
  createStubData(db, schema);

module.exports = schema;





