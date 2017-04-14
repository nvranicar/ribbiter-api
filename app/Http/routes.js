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
*/

const Route = use('Route');

Route.on('/').render('welcome');
Route.get('/users', 'UserController.index')
Route.resource('users', 'UserController');
Route.post('/users', 'UserController.store');
Route.post('/login', 'UserController.login');
