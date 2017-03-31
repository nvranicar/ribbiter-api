'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  post() {
    return this.hasMany('App/Model/Post');
  }
}

module.exports = User
