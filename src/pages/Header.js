import React, { useState } from 'react';
import { Button, Form, FormControl, Modal, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { LogoImg } from '../components/Styled/LogoImg';
import { Base } from '../components/Styled/Base';
<script
  src="https://unpkg.com/react/umd/react.production.min.js"
  crossorigin
></script>;

const Header = () => {
  const [Show, setShow] = useState(false);
  const Close = () => setShow(false);

  return (
    <Base>
      {/* Header Top 시작 */}
      <Navbar bg="light" expand="md">
        <Navbar.Brand>
          <NavLink to="/">
            <LogoImg src="./images/logo.png" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Modal centered show={Show} onHide={Close}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <LogoImg src="./images/logo.png" />
                  &nbsp; 로그인
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="id" placeholder="아이디를 입력하세요" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                    />
                  </Form.Group>

                  {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}
                  {/* <Button variant="primary" type="submit">
                    Submit
                  </Button> */}
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={Close}>
                  닫기
                </Button>
                <Button variant="outline-danger" type="submit" onClick={Close}>
                  로그인
                </Button>
              </Modal.Footer>
            </Modal>
            <Nav.Link>
              <Button variant="outline-danger" onClick={setShow}>
                로그인
              </Button>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Register">
                <Button variant="outline-danger">회원가입</Button>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/MyPage">
                <Button variant="outline-danger">마이페이지</Button>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/ServiceCenter">
                <Button variant="outline-danger">고객센터</Button>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Cart">
                <Button variant="outline-danger">장바구니</Button>
              </NavLink>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="검색어를 입력하세요"
              className="mr-sm-2"
            />
            <Button variant="outline-danger">검색</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* Header Top 끝 */}
      {/* Header Bottom 시작 */}
      <Navbar bg="light" expand="md">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/Product">
              <Button variant="outline-danger" size="lg">
                반찬
              </Button>
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Product">
              <Button variant="outline-danger" size="lg">
                국·탕
              </Button>
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Product">
              <Button variant="outline-danger" size="lg">
                간식
              </Button>
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Product">
              <Button variant="outline-danger" size="lg">
                음료
              </Button>
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Product">
              <Button variant="outline-danger" size="lg">
                소스
              </Button>
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/ServiceCenter">
              <Button variant="info" size="lg">
                개발계획 정리(임시)
              </Button>
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
      {/* Header Bottom 끝 */}
    </Base>
  );
};

export default Header;
