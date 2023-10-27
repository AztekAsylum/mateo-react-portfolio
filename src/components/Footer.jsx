import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Container fluid className="FooterStyle py-3">
      <Row>
        <Col className="GitHubLogo">
          <a href="https://github.com/AztekAsylum" target="_blank">
            <Image
              src="/Assets/Images/github-mark-white.svg"
              width="30"
              height="30"
            />
          </a>
        </Col>
        <Col className="LinkedinLogo">
          <a
            href="https://www.linkedin.com/in/mateo-rodriguez-86aba5aa/"
            target="_blank"
          >
            <Image
              src="/Assets/Images/Linkedin-White-72.png"
              width="30"
              height="30"
            />
          </a>
        </Col>
        <Col className="IGLogo">
          <a href="https://www.instagram.com/mateoxrodriguez/" target="_blank">
            <Image
              src="/Assets/Images/Instagram_Glyph_White.svg"
              width="30"
              height="30"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
