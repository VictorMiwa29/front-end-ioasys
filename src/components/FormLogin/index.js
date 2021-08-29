import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Row, FormControl, FloatingLabel, Button, Overlay, Tooltip,
} from 'react-bootstrap';
import LoginRequest from '../../services/api';

function FormLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const target = useRef(null);
  const history = useHistory();

  async function buttonLogin() {
    try {
      const { data: { name }, headers: { authorization } } = await LoginRequest(email, password);
      localStorage.setItem('user', JSON.stringify({ name, token: authorization }));
      return history.push('/home');
    } catch (error) {
      return setShow(true);
    }
  }

  return (
    <Container
      fluid
      style={{
        backgroundImage: "url('/images/e0db0a83068f46b3c4a2c016927db805.png')",
        backgroundSize: 'cover',
        backgroundPosition: '43%',
        height: '100vh',
      }}
      className="d-flex flex-column justify-content-center"
    >
      <Container>
        <Row className="p-0 mb-5">
          <Container className="d-flex p-0">
            <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'white' }}>ioasys</p>
            <p style={{ fontSize: '36px', color: 'white' }} className="fw-light ms-3 mt-1">Books</p>
          </Container>
        </Row>
        <Row sm={3}>
          <FloatingLabel
            controlId="floatingInput"
            className="mb-4 p-0 text-light"
            label="Email"
          >
            <FormControl
              className="border-0 text-light"
              placeholder="name@example.com"
              style={{ backgroundColor: 'rgba(0,0,0,0.32)', boxShadow: 'none' }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </Row>
        <Row sm={3}>
          <FloatingLabel controlId="floatingPassword" label="Password" className="p-0 text-light">
            <FormControl
              className="mb-5 border-0 text-light fw-bolder"
              placeholder="Password"
              style={{ backgroundColor: 'rgba(0,0,0,0.32)', boxShadow: 'none' }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              ref={target}
            />
            <Button id="button" onClick={() => buttonLogin()} style={{ boxShadow: 'none' }}>Entrar</Button>
          </FloatingLabel>
        </Row>
        <Row sm={3}>
          <Overlay target={target.current} show={show} placement="bottom-start">
            <Tooltip id="overlay-example">
              Email e/ou senha incorretos.
            </Tooltip>
          </Overlay>
        </Row>
      </Container>
    </Container>
  );
}

export default FormLogin;
