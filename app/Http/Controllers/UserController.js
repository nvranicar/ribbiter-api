'use strict';

const User = user('App/Model/User');
const attributes = ['email', 'username', 'password'];

class UserController {
  * index(request, response) {
    const users = yield User.with () .fetch();

    response.jsonApi('User', users);
  }
  * store(request, response) {
    const User = use('App/Model/User');
    const Hash = use('Hash');
    const input = request.only('email', 'password');
    input.password = yield Hash.make(input.password);
    const foreignKeys = {
    };
    const newUser = yield User.create(Object.assign({}, input, foreignKeys));

    response.json('User', newUser);
  }
}

module.exports = UserController
