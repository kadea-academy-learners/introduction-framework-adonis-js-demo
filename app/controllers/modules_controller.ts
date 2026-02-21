import type { HttpContext } from '@adonisjs/core/http'
import { error } from 'node:console'

type Module = {
  id: number
  name: string
  description: string
}
const modules: Module[] = [
  {
    id: 1,
    name: 'Module 1',
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Module 2',
    description: 'Description 2',
  },
]

export default class ModulesController {
  getModules(context: HttpContext) {
    return context.response.status(200).json(modules)
  }
  getModule(context: HttpContext) {
    const idParam: string = context.request.params().id
    if (idParam.length && Number.parseInt(idParam) > 0) {
      const id = Number.parseInt(idParam)
      const module = modules.find((current: Module) => current.id === id)
      if (module) {
        return context.response.status(200).json({
          message: 'Succès',
          data: module,
        })
      } else {
        return context.response.status(404).json({
          error: 'Module non trouvé',
          message: 'Module non trouvé',
        })
      }
    } else {
      return context.response.status(401).json({ error: "Vous n'avez pas entrer le paramètre" })
    }
  }
}
