'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {
  user() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }
}

module.exports = Post
