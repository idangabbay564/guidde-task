import { Router, Request, Response } from "express"
import PlaylistService from "../service/PlaylistService"
import errorHandlers from "../Utils/error/expressErrors"

const router = Router()

//Endpoint for fetching a specific playlist's information and details
router.get("/", async (req: Request, res: Response) => {
    try {
        let { id: playlistID, pageToken } = req.query
        if (!playlistID) return errorHandlers.userError(res, "must provide a playlist ID to fetch")

        playlistID = playlistID.toString()
        pageToken ? pageToken = pageToken.toString() : null

        const playlistObj = await PlaylistService.getPlaylist(playlistID, pageToken)

        if (!playlistObj) return errorHandlers.notFound(res)

        res.send(playlistObj)
    } catch (e) {

        errorHandlers.internalError(res)
    }


})

//Endpoint for fetching a list of playlists belongs to the salesforce channel
router.get("/list", async (req: Request, res: Response) => {
    try {
        const playlistList = await PlaylistService.getPlaylistsList()

        if (!playlistList) throw ("")

        res.send(playlistList)
    } catch (e) {
        errorHandlers.internalError(res)
    }

})

export default router