'use strict'

const Schema = use('Schema')

class PostTableSchema extends Schema {

  up () {
    this.table('post', (table) => {
      table.increments('id');
      table.string('body');
      table.integer('user_id').unsigned().references('id').inTable('users');
    })
  }

  down () {
    this.drop('post');
  }

}

module.exports = PostTableSchema
