import { Container, Row, Col, Card } from "react-bootstrap";

function CustomCard() {
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Card className="mx-auto text-center my-2">
            <Card.Img variant="top" src="/Assets/Images/Mateo.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Mateo is a Dev with a graphic design background based in Denver,
                CO. Being creative is his specialty. Additionally, he utilizes
                his photo and video skills to create unique content for promo
                and engagement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomCard;
