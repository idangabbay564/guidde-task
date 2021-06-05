import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ListTypes from "../../Utils/mappers/ListTypes";

const ListItem = (props) => {

    const { item, type, setPlaylistID } = props

    const history = useHistory()

    const onClick = () => {
        if (type === ListTypes.PLAYLIST_VIDEOS) {
            history.push("/video/" + item.snippet.resourceId.videoId)
        } else {
            setPlaylistID(item.id)
        }
    }

    return (
        <ListGroup.Item>
            <Button variant="link" onClick={onClick}><h6>{item.snippet.title}</h6></Button>
            {type === ListTypes.PLAYLISTS_LIST ? <p style={{ fontSize: 15 }}>{item.snippet.description}</p> : null}
            <img src={item.snippet.thumbnails.default.url} style={{ float: "right" }} />
        </ListGroup.Item>
    )

}

export default ListItem