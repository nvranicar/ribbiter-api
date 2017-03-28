'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
*/

const Route = use('Route');

Route.on('/').render('welcome');
Route.resource('user', 'UserController');
Route.post('/users', 'UserController.store');
