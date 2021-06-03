import Config from "../types/config";
import dotenv from "dotenv"

dotenv.config()

const config: Config = {
    mixPanel: {
        username: process.env.MP_USERNAME_1 || "",
        secret: process.env.MP_SECRET_1 || "",
        baseURL: "https://mixpanel.com/api/2.0"
    }
}

export default config