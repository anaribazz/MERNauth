import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const FormContainer = ({children}) => {
  return (
    <Container>
        <Row className='justify-content-md-center mt-5'>
            <Col xs={12} md={8} className='card p-5'>
                {children}
            </Col>
        </Row>
    </Container>
  )
}
