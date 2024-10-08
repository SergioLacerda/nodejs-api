import { Router } from 'express'

import { getBasic } from './Controller.js'

class Routes {

	constructor() {
		this.routes = Router()
	}

	initializeRoutes() {

		this.routes.get( `/`, (request, response) => {

			const resposta = getBasic()

			response.status(200).json(resposta).end()
		})


		//TIPS: add here new API's with differente verbs like POST, PUT, DELETE

		return this
	}

	buildRoutes() {
		return this.routes
	}
}

export default Routes