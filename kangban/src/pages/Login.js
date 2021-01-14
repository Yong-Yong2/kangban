import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import LogoImg from '../components/Styled/LogoImg';

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>강반 로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>바디임</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
