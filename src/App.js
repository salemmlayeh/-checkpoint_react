import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import products from './product';



function App() {
  return (
    <Container className="mt-5">
      <Row>
        {products.map((product, index) => (
          <Col md={4} sm={12} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Image product={product} />
                <Name product={product} />
                <Price product={product} />
                <Description product={product} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      
    </Container>
  );
}

export default App;