import type { HttpContext } from '@adonisjs/core/http'
const users: {
  id: number
  name: string
}[] = [
  {
    id: 1,
    name: 'Randy',
  },
  {
    id: 2,
    name: 'Christian',
  },
  {
    id: 3,
    name: 'Michel',
  },
]
export default class CoachesController {
  rendreCoaches(ctx: HttpContext) {
    return ctx.response.json({
      data: users,
    })
  }

  rendreUnSeulCoach({ request, response }: HttpContext) {
    const params = request.params()
    const paramsName = params.name

    const findCoach = users.find((valueCurrent) => {
      return valueCurrent.name === paramsName
    })
    if (findCoach) {
      return response.json({
        data: findCoach,
      })
    }
    return response.status(404).json({
      message: 'Coach non trouvé',
    })
  }
}
