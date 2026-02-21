/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const CoachesController = () => import('#controllers/coaches_controller')
import router from '@adonisjs/core/services/router'
import type { HttpContext } from '@adonisjs/core/http'
//La méthode get attend deux arguments
//Le premier est l'uri:string
// ctx : {view, response, request}

function rendLaPageDAccueille({ view }: HttpContext) {
  return view.render('pages/home')
}
router.get('/', rendLaPageDAccueille)

router.get('/coachs', [CoachesController, 'rendreCoaches'])
router.get('/coachs/:name', [CoachesController, 'rendreUnSeulCoach'])
