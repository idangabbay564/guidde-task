import ObjType from "../types/controllers/ObjType";
import { google, GoogleApis, youtube_v3 } from "googleapis"
import config from "../config";

//class being used as the service layer for the playist controller
export default class PlaylistService {

    private static key: string;
    private static google: GoogleApis;
    private static channelID: string = config.youtube.salesforce.channelID;

    public static init(key: string, google: GoogleApis) {
        this.key = key
        this.google = google
    }

    //function handles getting a specific platlist's videos list
    public static async getPlaylist(playlistId: string, pageToken?: string): Promise<ObjType> {
        const key = this.key

        //fetch videos list from the GoogleAPI wrapper util
        const params: youtube_v3.Params$Resource$Playlistitems$List = {
            key,
            part: ["snippet"],
            playlistId,
        }

        pageToken ? params.pageToken = pageToken : null

        const playlist = (await this.google.youtube("v3").playlistItems.list(params)).data

        return playlist
    }

    //function handles getting a the salesforce platlists list
    public static async getPlaylistsList(): Promise<ObjType[] | ObjType> {
        const key = this.key

        //fetch playlists list from the GoogleAPI wrapper util
        const list = (await this.google.youtube("v3").playlists.list({
            key,
            part: ["snippet"],
            channelId: this.channelID,
        })).data

        return list
    }


}

//initialize the class with the needed static props
PlaylistService.init(config.youtube.key, google)