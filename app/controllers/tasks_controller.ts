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
  async store({ request, response, auth }: HttpContext) {

    const task:Task= await Task.create({user_id: auth?.user?.id, ...request.only(['task', 'status'])})
    return task;
  }

  /**
   * Show individual record
   */
  async show({ request, auth, params, response }: HttpContext) {

    const task = await Task.findOrFail(request.param('id'))

    const user= await User.findOrFail(auth?.user?.id)

    if(task.userId !== auth?.user?.id){

      return response.abort('You are not allowed to do this process')
    }

    return response.json({
      task,
      user
    })
  }

  async update({ params, request }: HttpContext) {

    const task: Task | null = await Task.findOrFail(request.param('id'))
    task.task = request.input('task')
    task.status = request.input('status')
    await task.save()
   
  }

  /**
   * Delete record
   */
  async destroy({ request, params, auth, response }: HttpContext) {
   
    const task: Task | null = await Task.findOrFail(request.param('id'))

    if(auth?.user?.id !== task.userId){

      return response.abort('You are not allowed to do this process')
    }

    await task.delete()

  }
}