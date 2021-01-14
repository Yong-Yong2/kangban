import { Button, Modal } from 'react-bootstrap';

const LoginModal = ({ Show, Close }) => {
  /* 로그인 모달 시작 */
  <Modal show={Show} onHide={Close}>
    <Modal.Header closeButton>
      <Modal.Title>강반 로그인</Modal.Title>
    </Modal.Header>
    <Modal.Body>바디임</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={Close}>
        닫기
      </Button>
      <Button variant="primary" onClick={Close}>
        저장
      </Button>
    </Modal.Footer>
  </Modal>;
  /* 로그인 모달 끝 */
};
