import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "../../appData/MovieListData.json";
const MoviesList = () => {
  return (
    <div>
      <h1>recomendee RecomemdedMovies</h1>
      <div>
        <Container fluid style={{ padding: "5%" }}>
          <Row style={{ textAlign: "center" }}>
            {data.map((mov) => {
              return (
                <Col
                  id={mov.id}
                  key={mov.id}
                  xs={6}
                  md={4}
                  lg={3}
                  style={{ marginBottom: "7%" }}
                >
                  <Card style={{ height: "335px", width: "200px" }}>
                    <Card.Img
                      src={mov.moviePosterUrl}
                      alt="Card image"
                      style={{
                        height: "335px",
                        width: "200px",
                        alignSelf: "center",
                      }}
                    />
                    <Card.Body>
                      <Card.Text>
                        <b>{mov.movieName}</b>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MoviesList;
