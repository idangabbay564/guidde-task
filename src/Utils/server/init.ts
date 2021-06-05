import express from "express"
import chalk from "chalk"
import cors from "cors"

import playlistRouter from "../../routers/playlist";
import config from "../../config";

export default async (expressPackage: typeof express, port: number | string): Promise<void> => {
    const app = expressPackage();

    process.env.NODE_ENV === "development" ? app.use(cors({ origin: "http://localhost:3000" })) : null

    const staticDirPath = config.app?.staticDirPath

    app.use(express.static(staticDirPath))
    app.use(playlistRouter.endpoint, playlistRouter.router)

    app.listen(port, () => {
        console.log(chalk.green(`Running on port ${process.env.PORT || 8080}`))
    })
}

