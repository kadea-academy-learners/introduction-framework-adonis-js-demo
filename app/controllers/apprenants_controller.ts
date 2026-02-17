import Apprenant from '#models/apprenant'
import type { HttpContext } from '@adonisjs/core/http'

export default class ApprenantsController {
  public async createApprenant({ request }: HttpContext) {
    const { name, email, genre, avatar, bio } = request.all()
    const apprenant = await Apprenant.create({ name, email, genre, avatar, bio })
    return apprenant
  }
  public async createApprenantPage({ view }: HttpContext) {
    return view.render('pages/create_apprenants', {
      pageTitle: 'Apprenants creation',
      pageDescription: 'Apprenants creation',
    })
  }
  public async getApprenants({ view }: HttpContext) {
    const apprenants = await Apprenant.all()
    return view.render('pages/apprenants', {
      pageTitle: 'Apprenants creation',
      pageDescription: 'Apprenants creation',
      apprenants,
    })
  }
}
