import path from "path"

import dotenv from "dotenv"
import Config from "../types/config";

dotenv.config()

//project configuration object
const config: Config = {
    youtube: {
        key: process.env.API_KEY || "",
        salesforce: {
            channelID: "UCUpquzY878NEaZm5bc7m2sQ"
        }
    },
    app: {
        port: process.env.PORT || 5000,
        staticDirPath: path.join(__dirname, "..", "..", "FE", "build")

    }
}

export default config