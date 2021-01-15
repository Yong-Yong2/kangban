import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Base, ContCenter, DivisionLine } from '../components/Styled/Base';
import { LogoImg } from '../components/Styled/LogoImg';

const Register = () => {
  return (
    <Base>
      <DivisionLine />
      <ContCenter>
        <h2>
          <LogoImg src="./images/logo.png" />
          &nbsp; 회원가입
        </h2>
      </ContCenter>
      <DivisionLine />
      <ContCenter>
        <h6>다른 방법으로 회원가입하기</h6>
        <span>네이버 아이디로 회원가입</span>
        <span>카카오 아이디로 회원가입</span>
        <span>구글 아이디로 회원가입</span>
      </ContCenter>
      <DivisionLine />
      &nbsp;
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="id" placeholder="아이디를 입력하세요" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>이름</Form.Label>
            <Form.Control type="name" placeholder="이름을 입력하세요" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="Password" placeholder="비밀번호를 입력하세요" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control type="Password" placeholder="비밀번호를 입력하세요" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력하세요" />
          </Form.Group>
          {/* 이 부분 드롭박스로 입력받기 및 등록된 값 사용할 수 있게 하기 */}
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력하세요" />
          </Form.Group>
          <Form.Group as={Col} style={{ 'margin-top': '2rem' }}>
            <Button variant="outline-danger">인증메일 발송</Button>
          </Form.Group>
        </Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          여기에 위에 버튼 클릭하면 인풋박스 보이게하고 인증값 확인할 수 있는
          기능만들기
        </Form.Group>
        {/* 다른 사이트들은 주소기능을 어떻게 하지? */}
        {/* <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row> */}

        <ContCenter>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="이용약관 및 개인정보취급방침에 동의합니다.(필수)"
            />
          </Form.Group>
          <Button variant="outline-danger" size="lg">
            회원가입
          </Button>
        </ContCenter>
      </Form>
    </Base>
  );
};

export default Register;
