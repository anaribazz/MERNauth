import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FormContainer } from '../Components/FormContainer';

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }
  return (
    <FormContainer>
        <h1>Log In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
                Log In
            </Button>
            <Row className='py-3'>
                <Col md={5}>New Customer? <Link to='/register'></Link></Col>
            </Row>
        </Form>

    </FormContainer>

)
}
