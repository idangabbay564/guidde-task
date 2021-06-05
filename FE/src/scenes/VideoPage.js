import { Button, Container, Row } from "react-bootstrap"
import { useHistory, useParams } from "react-router"
import YouTube from "react-youtube"

const VideoPage = (props) => {

    const { videoId } = useParams()
    const history = useHistory()

    return (
        <Container style={{ padding: 30 }}>
            <Button variant={"link"} onClick={() => history.goBack()}>Go Back to playlists page</Button>
            <h1 style={{ textAlign: "center" }}>Watch Video</h1>
            <Row style={{ alignContent: "center", justifyContent: "center" }}>
                <YouTube videoId={videoId} opts={{}} />
            </Row>
        </Container>
    )
}

export default VideoPage