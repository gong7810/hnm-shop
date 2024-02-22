import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault(); // page 새로고침 방지
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div>
      <Container className="contain">
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group className="mb-3 emailpw" controlId="formBasicEmail">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" width={10} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 emailpw" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
