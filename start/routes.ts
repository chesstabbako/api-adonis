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

router.resource('api', UsersController);

router.post('api/login', [SessionController, 'login'])

router.post('api/logout', [LogoutsController, 'logout'])
  .use(middleware.auth())