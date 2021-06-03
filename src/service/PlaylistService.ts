import ObjType from "../types/controllers/ObjType";
import { google, GoogleApis, youtube_v3 } from "googleapis"
import config from "../config";

export default class PlaylistService {

    private static key: string;
    private static google: GoogleApis;

    public static init(key: string, google: GoogleApis) {
        this.key = key
        this.google = google
    }

    public static async getPlaylist(playlistId: string, pageToken?: string): Promise<ObjType> {
        const key = this.key

        const params: youtube_v3.Params$Resource$Playlistitems$List = {
            key,
            part: ["snippet"],
            playlistId,
        }

        pageToken ? params.pageToken = pageToken : null

        const playlist = (await this.google.youtube("v3").playlistItems.list(params)).data

        return playlist
    }

    public static async getPlaylistsList(): Promise<ObjType[] | ObjType> {
        const key = this.key

        const list = (await this.google.youtube("v3").playlists.list({
            key,
            part: ["snippet"],
            channelId: "UCUpquzY878NEaZm5bc7m2sQ",
        })).data

        return list
    }


}

PlaylistService.init(config.youtube.key, google)