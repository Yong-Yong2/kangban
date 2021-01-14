import React, { useState } from 'react';
import { Button, Carousel, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Base } from '../components/Styled/Base';

const BannerImg = styled.img`
  width: 100%;
  height: 400px;
`;

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      {/*배너 시작 ↓ */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <BannerImg src="./images/banner1.jpg" alt="배너 1"></BannerImg>
          <Carousel.Caption>
            <h3>첫번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg src="./images/banner2.jpg" alt="배너 2"></BannerImg>
          <Carousel.Caption>
            <h3>두번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg src="./images/banner3.jpg" alt="배너 3"></BannerImg>
          <Carousel.Caption>
            <h3>세번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg src="./images/banner4.jpg" alt="배너 4"></BannerImg>
          <Carousel.Caption>
            <h3>네번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg src="./images/banner5.jpg" alt="배너 5"></BannerImg>
          <Carousel.Caption>
            <h3>다섯번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg src="./images/banner6.jpg" alt="배너 6"></BannerImg>
          <Carousel.Caption>
            <h3>여섯번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <BannerImg src="./images/banner7.jpg" alt="배너 7"></BannerImg>
          <Carousel.Caption>
            <h3>일곱번째 슬라이드</h3>
            <p>슬라이드에 대한 설명 작성칸(?)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* 배너 끝 ↑ */}
      <Base>
        <Navbar bg="light" expand="md">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="/Login">
                <Button variant="outline-danger" size="lg">
                  공지사항?
                </Button>
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Base>
    </div>
  );
};

export default Home;
