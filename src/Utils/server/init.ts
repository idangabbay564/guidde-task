import express from "express"
import chalk from "chalk"
import playlistRouter from "../../routers/playlist";

export default async (expressPackage: typeof express, port: number | string): Promise<void> => {
    const app = expressPackage();

    app.get("/", (req, res) => res.send("running"))

    app.use("/playlist",playlistRouter)

    app.listen(port, () => {
        console.log(chalk.green(`Running on port ${process.env.PORT || 8080}`))
    })
}

