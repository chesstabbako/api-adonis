import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
 
  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const user: User = await User.create(request.all())
    return user
  }

}
