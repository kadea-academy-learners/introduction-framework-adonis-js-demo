import type { HttpContext } from '@adonisjs/core/http'

export default class FrontOfficesController {
  public async homePage({ view }: HttpContext) {
    return view.render('pages/home', {
      pageTitle: 'Wellcom to Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async aboutPage({ view }: HttpContext) {
    return view.render('pages/about', {
      pageTitle: 'About Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async contactPage({ view }: HttpContext) {
    return view.render('pages/contact', {
      pageTitle: 'Contact Blogoss kinshasa',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
}
