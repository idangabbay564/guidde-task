import { Col, Container, Row, Spinner } from "react-bootstrap";

const Loader = () => (
    <Container style={style.container}>
        <Row>
            <Col className="text-center">
                <Spinner animation="border" />
            </Col>
        </Row>
    </Container>
)

const style = {
    container: {
        padding: 30
    },
}

export default Loader