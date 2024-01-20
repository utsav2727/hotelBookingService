const { EntitySchema } = require('typeorm');

const postSchema = new EntitySchema({
  name: 'Post',
  tableName: 'posts',

  columns: {
    id: { primary: true, type: 'text', generated: 'uuid' },

    title: { type: 'varchar', nullable:false },

    body: { type: 'text' },

    createdAt: {
      type: 'timestamp',
      default: new Date().toISOString().split('T')[0],
    },
  },
});

module.exports = postSchema;