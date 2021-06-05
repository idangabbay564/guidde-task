import { useState } from "react"
import { Container } from "react-bootstrap"
import ListTypes from "../../Utils/mappers/ListTypes"
import List from "./List"

const ListSection = (props) => {

    const { type, playlistID, setPlaylistID } = props

    const blankVideosPage = !!(type === ListTypes.PLAYLIST_VIDEOS && !playlistID)

    return (
        !blankVideosPage ?
            (
                <div>
                    {type === "playlistsList" ? <h4 style={headerStyle} >SalesForce Playlists</h4> : <h4 style={headerStyle}>Toggle Chosen Playlist's Videos</h4>}
                    <List type={type} playlistID={playlistID} setPlaylistID={setPlaylistID} />
                </div>
            )
            :
            null
    )
}

const headerStyle = {
    textAlign: "center"
}
export default ListSection