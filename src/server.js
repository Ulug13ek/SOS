import express from "express"
import authRouter from "./routes/auth.js"

import  { PORT }  from "../config.js"

const app = express()
app.use(express.json())
app.use("/",authRouter)



app.listen(PORT, ()=> console.log("Server is running http://localhost:"+PORT))