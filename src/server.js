import express from "express"
import authRouter from "./routes/auth.js"

const app = express()
app.use(express.json())
app.use("/",authRouter)



app.listen(4000, ()=> console.log("Server is running http://localhost:4000"))