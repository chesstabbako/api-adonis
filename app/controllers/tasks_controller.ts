import Task from '#models/task'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {

    return await Task.all()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    const task:Task= await Task.create(request.all())
    return task;
  }

  /**
   * Show individual record
   */
  async show({ request, auth, params, response }: HttpContext) {

    const task = await Task.findOrFail(request.param('id'))

    const user= await User.findOrFail(auth?.user?.id)

    if(user.id !== auth?.user?.id){

      return response.abort('This user is not auth')
    }

    return response.json({
      task,
      user
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {

    const task: Task | null = await Task.findOrFail(request.param('id'))
    task.task = request.input('task')
    task.status = request.input('status')
    task.userId = request.input('user_id')
    await task.save()
   
  }

  /**
   * Delete record
   */
  async destroy({ request, params }: HttpContext) {
   
    const task: Task | null = await Task.findOrFail(request.param('id'))
    await task.delete()

  }
}