/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

import SessionController from '#controllers/session_controller';
import LogoutsController from '#controllers/logouts_controller';
import { middleware } from './kernel.js';
import TasksController from '#controllers/tasks_controller';

router.resource('api/users', UsersController).only(['store', 'index']).use(
  ['index'],
  middleware.auth())

router.post('api/login', [SessionController, 'login'])

router.resource('api/tasks', TasksController).only(['store', 'show', 'destroy'])
.use(
  ['store', 'show', 'destroy'],
  middleware.auth()
)

router.post('api/logout', [LogoutsController, 'logout'])
  .use(middleware.auth())

  

