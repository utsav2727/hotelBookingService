const { DataSource } = require('typeorm');
const Post = require('../model/post/postEntity');

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '',
  database: 'travel',
  synchronize: true,
  entities: [Post],
});

dataSource.initialize().then(() => console.log('connected to DB succesfully!'));

module.exports = dataSource;