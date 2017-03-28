'use strict';

const User = user('App/Model/User');
const attributes = ['email', 'username', 'password'];

class UserController {
  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const user = yield User.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('User', user);
  }
}

module.exports = UserController
