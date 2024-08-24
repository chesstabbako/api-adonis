import type { HttpContext } from '@adonisjs/core/http'
import User from "#models/user"
import hash from '@adonisjs/core/services/hash'

export default class SessionController {

    async login({ request, response }: HttpContext) {

        const { email, password } = request.only(['email', 'password'])

        const user = await User.findBy('email', email)
      
        if (!user) {
         response.abort('Invalid credentials')
        }

    /**
     * Verify the password using the hash service
     */
    await hash.verify(user.password, password)
    const userVerify = await User.verifyCredentials(email, password)

    if(!userVerify){
        return response.abort('It was not possible. Try again!')
    }

    const token = await User.accessTokens.create(user)

  return {
    type: 'bearer',
    value: token.value!.release(),
  }
}
}