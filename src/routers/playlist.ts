import { Router, Request, Response } from "express"
import PlaylistService from "../service/PlaylistService"
import Endpoints from "../types/controllers/Endpoints"
import errorHandlers from "../utils/error/expressErrors"

const router = Router()

//Endpoint for fetching a specific playlist's information and details
router.get("/", async (req: Request, res: Response) => {
    try {
        let { id: playlistID, pageToken } = req.query
        if (!playlistID) return errorHandlers.userError(res, "must provide a playlist ID to fetch")

        playlistID = playlistID.toString()
        pageToken ? pageToken = pageToken.toString() : null // pagination option parameter handlement

        const playlistObj = await PlaylistService.getPlaylist(playlistID, pageToken) // get playlist from service class

        if (!playlistObj) return errorHandlers.notFound(res) // return 404 if couldn find related playlist

        res.send(playlistObj)
    } catch (e) {

        // any error that is thrown and not being handled earlier in the code will be send as an internal error to the client
        errorHandlers.internalError(res)
    }


})

//Endpoint for fetching a list of playlists belongs to the salesforce channel
router.get("/list", async (req: Request, res: Response) => {
    try {
        const playlistList = await PlaylistService.getPlaylistsList() // get the list of playlists from the service class

        if (!playlistList) throw ("")

        res.send(playlistList)
    } catch (e) {

        // any error that is thrown and not being handled earlier in the code will be send as an internal error to the client
        errorHandlers.internalError(res)
    }

})

export default {
    router,
    endpoint: Endpoints.PLAYLIST
}