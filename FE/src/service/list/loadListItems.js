import axios from "axios"
import endpoints from "../../Utils/endpoints"
import ListTypes from "../../Utils/mappers/ListTypes"

const loadListItems = async (type, playlistID, setItems, setLoading) => {
    try {

        console.log("running")

        if (type === ListTypes.PLAYLISTS_LIST) {

            setLoading(true)

            const items = (await (axios.get(endpoints.PLAYLISTS_LIST))).data?.items

            setLoading(false)

            setItems(items)
        }

        else if (type === ListTypes.PLAYLIST_VIDEOS) {
            if (!playlistID) setItems(null)
            setLoading(true)

            const items = (await (
                axios.get(endpoints.VIDEOS, {
                    params: {
                        id: playlistID
                    }
                })
            )).data?.items

            setLoading(false)

            setItems(items)
        } else setItems([])

    } catch (e) {
        console.log("error occured", e)
    }
}

export default loadListItems