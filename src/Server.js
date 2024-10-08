import Application from './Application.js'

const startApplication = () => new Application().build().start()

try {
    //TIPS: add here database connection!

    startApplication()

} catch (error) {
    console.log(`Unexpected error. Detail: ${error}`)
    //TIPS: add here CLOSE database connection: ex: await closeConnection()
}
