'use strict'

const Schema = use('Schema')

class PostTableSchema extends Schema {

  up () {
    this.table('post', (table) => {
      // alter post table
    })
  }

  down () {
    this.table('post', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = PostTableSchema
