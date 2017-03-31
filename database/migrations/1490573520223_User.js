'use strict';

const Schema = use('Schema');

class UserTableSchema extends Schema {

  up () {
    this.create('User', (table) => {
      table.increments('id');
      table.string('email').unique();
      table.string('username').unique();
      table.string('password');
      table.timestamps();
    })
  }

  down () {
    this.drop('User');
  }

}

module.exports = UserTableSchema
