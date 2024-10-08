import express from 'express'

import Routes from './Routes.js'

const port = global.process.env.APP_PORT || 3000

class Application {

	constructor() {
		this.server = null
		this.app = express()
		this.routes = new Routes()
	}

	buildRoutes() {
		console.log('Initializing routes')
		this.app.use(express.json())
		this.app.use(this.routes.initializeRoutes().buildRoutes())
	}

	build() {
		this.buildRoutes()
		return this
	}

	start() {
		console.log('Starting the application')


		this.server = this.app.listen(port, () => {
      		console.log(`Servidor rodando em http://localhost:${port}`)
		})
	}
}

export default Application
