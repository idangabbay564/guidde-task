import Config from "../types/config";
import dotenv from "dotenv"

dotenv.config()

const config: Config = {
    youtube: {
        key: process.env.API_KEY || "",
        salesforce: {
            channelID:"UCUpquzY878NEaZm5bc7m2sQ"
        }
    },
    app: {
        port: process.env.PORT || 5000
    }
}

export default config