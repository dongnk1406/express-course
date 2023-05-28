import express from "express"
import bodyParser from "body-parser"
import { configViewEngine } from "./config/viewEngine"
import { initWebRoutes } from "./routes/web"
import * as dotenv from 'dotenv'
import { connectDB } from "./config/connectDB"
dotenv.config()

const app = express()
const port = process.env.PORT || 8080

// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Template engine
configViewEngine(app)

// routes
initWebRoutes(app)

// connect DB
connectDB()

app.listen(port, () => console.log(`Backend Nodejs is running on http://localhost:${port}/`))