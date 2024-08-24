import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import DB from '@adonisjs/lucid/services/db'

export default class LogoutsController {
    public async logout({ auth, response }: HttpContext) {

        const getUser = auth.user?.id
        const user = await User.findOrFail(getUser)
        await User.accessTokens.delete(user, user.id)

        await DB.from('auth_access_tokens').where('tokenable_id', user.id).delete()

        return response.ok({
            success: true,
            message: 'User logged out',
        })
    }
}