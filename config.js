import fs from "fs"
import {} from "dotenv/config"

fs.writeFileSync(".env", "TOKEN_KEY="+("" + Date.now()))

const PORT = process.env.PORT || 1313

const TOKEN_TIME = 60*60*24

export {
    TOKEN_TIME,
    PORT
}
