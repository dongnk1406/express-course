import express from "express"
import homeController from "../controllers/home.controller"

const router = express.Router()

export const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    return app.use('/', router)
}
