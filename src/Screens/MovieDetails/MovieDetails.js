import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  NavLink,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Component/Header/Header";

const MovieDetails = () => {
  const hr = "2h 20min",
    movieType = "Drama,Mystery,Thriller",
    movieSencerType = "UA",
    movieReleaseData = "18 Nov, 2022";
  return (
    <div>
      <Header />
      <Card.Img
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/drishyam-2-et00331997-1667547668.jpg"
        alt="Card image"
        style={{
          height: "385px",
          width: "100%",
          alignSelf: "center",
        }}
      ></Card.Img>
      <div
        style={{
          backgroundColor: "GrayText",
        }}
      >
        <Row xs={2} md={4}>
          <Col>
            <Card.Img
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/drishyam-2-et00331997-1667547668.jpg"
              alt="Card image"
              style={{
                height: "385px",
                width: "250px",
              }}
            ></Card.Img>
          </Col>
          <Col>
            <Card.Title>drisham 2</Card.Title>
            <p>ajie</p>
            <Card
              style={{
                backgroundColor: "red",
              }}
            >
              <Row
                xs={2}
                style={{ justifyContent: "space-between", margin: "5%" }}
              >
                <Col>
                  <Card.Title>Add your rating & review</Card.Title>
                  <Card.Text>Add your rating & review</Card.Text>
                </Col>

                <Button variant="danger" >
                  Danger
                </Button>
              </Row>
            </Card>
            <Row xs={2} md={4} style={{ margin: "10px" }}>
              <Button variant="light">
                <Link style={{ color: "black" }}>27</Link>
              </Button>
              <Button variant="light">
                <Link style={{ color: "black" }}>27</Link>
              </Button>
            </Row>
            <Card.Text
              style={{ color: "white", backgroundColor: "red" }}
            >{`${hr}•${movieType}•${movieSencerType}•${movieReleaseData}`}</Card.Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MovieDetails;
