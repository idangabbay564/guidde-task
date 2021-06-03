import express from "express"
import config from "./config"

import initServer from "./Utils/server/init"

const port = config.app.port

initServer(express, port)

