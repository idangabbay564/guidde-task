import Config from "../types/config";
import dotenv from "dotenv"

dotenv.config()

const config: Config = {
    youtube: {
        key: process.env.API_KEY || ""
    },
    app: {
        port: process.env.PORT || 5000
    }
}

export default config