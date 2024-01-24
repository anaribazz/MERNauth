import { Container, Card, Button } from "react-bootstrap";

import React from "react";

export const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            A simple authentication app built with MERN stack. This project
            demonstrates how to build and store JWT in a HTTP Only cookie.
          </p>
          <div className="d-flex">
            <Button variant="primary" href="/login" className="me-3">
              Log In
            </Button>
            <Button variant="secondary" href="/register">
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};
