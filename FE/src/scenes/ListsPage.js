import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ListSection from "../components/listPage/ListSection"
import ListTypes from "../Utils/mappers/ListTypes"

const ListsPage = () => {

    const [playlistID, setPlaylistID] = useState(null)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ListSection type={ListTypes.PLAYLISTS_LIST}  setPlaylistID={setPlaylistID} />
                </Col>
                <Col>
                    <ListSection type={ListTypes.PLAYLIST_VIDEOS} playlistID={playlistID}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ListsPage