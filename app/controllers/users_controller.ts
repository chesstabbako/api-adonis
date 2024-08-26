import Task from '#models/task';
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import DB from '@adonisjs/lucid/services/db'

export default class UsersController {
 
  /**
   * Handle form submission for the create action
   */

  async index({ request, auth, response}: HttpContext) {
    const tasks = await DB.from('tasks').where('user_id', auth?.user?.id)
    return response.json({
      tasks,
    })
  }

  async store({ request }: HttpContext) {
    const user: User = await User.create(request.all())
    return user
  }

}
