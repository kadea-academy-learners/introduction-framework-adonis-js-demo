import type { HttpContext } from '@adonisjs/core/http'

export default class LikesController {
  getApprenantLike(context: HttpContext) {
    return context.view.render('pages/home')
  }
}
