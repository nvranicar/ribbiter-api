'use strict'

const attributes = ['username', 'password'];

class PostController { * store(request, response) {
    const User = use('App/Model/User');
    const Hash = use('Hash');
    const input = request.only('username', 'password');

    try {
      const user = yield User.findBy('username', input.username);

      yield Hash.verify(input.password, user.password);
      const jwt = yield request.auth.generate(user);

      return response.json({access_token: jwt});
    } catch (e) {
      return response.status(401).json({error: 'User failed to login'});
    }
  }

}
}

module.exports = PostController
