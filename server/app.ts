// I have used the lecture materials as a source for this file. 

import express, {Express} from "express"
import path from "path"
import router from "./routes"
import morgan from "morgan"
import mongoose, { Connection } from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
const port = 3000

const mongoDB: string = "mongodb://127.0.0.1:27017/testdb"
mongoose.connect(mongoDB)
mongoose.Promise = Promise
const db: Connection = mongoose.connection


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))


app.use(express.static(path.join(__dirname, "../public")))
app.use("/", router)

app.listen(port, () => {
    console.log(`Server has been started and is running on port ${port}`)

})