import { Container, Row, Col } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
    <Container fluid className="text-center py-5 bg-light">
      <Row className="py-lg-5">
        <Col xs={{span: 6, offset: 3}} className="mx-auto">
          <h1 className="fw-light">{title}</h1>
          <p className="lead text-muted"> {lead}</p>
        </Col>
      </Row>
    </Container>
    
    
  );
}
<section>
      
    </section>