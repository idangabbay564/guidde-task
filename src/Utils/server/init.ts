import path from "path"

import express from "express"
import chalk from "chalk"
import cors from "cors"

import playlistRouter from "../../routers/playlist";

export default async (expressPackage: typeof express, port: number | string): Promise<void> => {
    const app = expressPackage();

    process.env.NODE_ENV === "development" ? app.use(cors({ origin: "http://localhost:3000" })) : null

    const publicDirPath = path.join(__dirname, "..", "..", "..", "FE", "build")

    app.use(express.static(publicDirPath))

    app.use(playlistRouter.endpoint, playlistRouter.router)

    app.listen(port, () => {
        console.log(chalk.green(`Running on port ${process.env.PORT || 8080}`))
    })
}

