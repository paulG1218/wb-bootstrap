import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Value({ title, description, action }) {
  return (
      <Card className="shadow-sm h-100">
        <Card.Body className="p-4 d-flex flex-column">
          <Card.Title>{title}</Card.Title> 
          <Card.Text>{description}</Card.Text>
          <Button style={{backgroundColor: '#19910f'}} className="mt-auto">
            {action}
          </Button>
        </Card.Body>
      </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container className="py-5">
      <Row>
          {values.map(({ title, description, action }, index) => (
            <Col xs={{span: 4}} key={index}>
              <Value title={title} description={description} action={action} />
            </Col>
          ))}
      </Row>
    </Container>
  
  );
}