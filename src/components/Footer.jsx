import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Container fluid className="FooterStyle">
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <Image src="/Assets/Images/Instagram_Glyph_White.svg" />
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Footer;
