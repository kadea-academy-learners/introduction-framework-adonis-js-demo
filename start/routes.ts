/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ModulesController = () => import('#controllers/modules_controller')
import router from '@adonisjs/core/services/router'
const FrontOfficesController = () => import('#controllers/front_offices_controller')
const ApprenantsController = () => import('#controllers/apprenants_controller')

router.get('/', [FrontOfficesController, 'homePage']).as('home')
router.get('/about', [FrontOfficesController, 'aboutPage']).as('about')
router.get('/contact', [FrontOfficesController, 'contactPage']).as('contact')
router.get('/services', [FrontOfficesController, 'servicesPage']).as('services')
router.get('/blog', [FrontOfficesController, 'blogPage']).as('blog')
router.post('/subscribe', [FrontOfficesController, 'subscribeToBlog'])
router.post('/apprenants', [ApprenantsController, 'createApprenant']).as('apprenants.create')
router.get('/apprenants', [ApprenantsController, 'getApprenants']).as('apprenants.get')
router
  .get('/apprenants/create', [ApprenantsController, 'createApprenantPage'])
  .as('apprenants.form')
router.get('/modules', [ModulesController, 'getModules'])
router.get('/modules/:id', [ModulesController, 'getModule'])
