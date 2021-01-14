// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// const MarginContainer=styled.div`
//     display: block;
//     background-color: whitesmoke;
//     margin:auto;
// `;

// const Top=styled.div`
//     position: relative;
//     display: inline-flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
// `;

// const LogoImg=styled.img`
//     width: 200px;
//     height: 100px;
//     border: 2px solid red;
//     border-radius: 25px;
// `;

// const SearchBox=styled.input`
//     width: 200px;
//     height: 2em;
//     border: 2px solid red;
//     border-radius: 10px;
// `;

// const Test=styled.span`
//     position: relative;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: flex-end;
// `;

// const Container=styled.header`
//     position: relative;
//     z-index: 1000;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

// const HeaderMenu=styled.div`
//     color: black;
//     border: 2px solid red;
//     border-radius: 10px;
//     &:focus,
//     &:hover{
//         color: blue;
//         font-size: 1.5rem;
//     }
// `;

// const NavMenu=styled.ul`
//     list-style: none;
//     padding-left: 0;
//     margin-top: 0;
//     margin-bottom: 0;
//     line-height: 45px;
//     font-weight: 700;
//     text-transform: uppercase;
// `;

// const NavMenuItem=styled.li`
//     display: inline-block;
//     position: relative;
//     &:hover{
//         background-color: red;
//     }
// `;

// const A=styled.a`
//     display: block;
//     padding: 0 16px;
//     line-height: inherit;
//     border: 2px solid red;
//     cursor: pointer;
// `;
// // 서브메뉴 시작

// const NavSubMenu=styled.ul`

// `;

// const NavSubMenuItem=styled.li`

// `;

// const Header = (props) => {

//     const activeStyle={
//         color: 'red',
//         fontSize:'1.5rem'
//     };
//     const ShowSubMenu={
//         display: 'block'
//     };

//     return (
//         <MarginContainer>
//             <Container>
//             <SearchBox type="text" placeholder="검색기능 구현 필요"/>
//             <NavLink to="/"><LogoImg src="./images/logo.png"/></NavLink>
//             <Test>
//                 <NavLink to="/Login" activeStyle={activeStyle}><HeaderMenu>로그인</HeaderMenu></NavLink>&nbsp;
//                 <NavLink to="/Register" activeStyle={activeStyle}><HeaderMenu>회원가입</HeaderMenu></NavLink>&nbsp;
//                 <NavLink to="/MyPage" activeStyle={activeStyle}><HeaderMenu>마이페이지</HeaderMenu></NavLink>&nbsp;
//                 <NavLink to="/ServiceCenter" activeStyle={activeStyle}><HeaderMenu>고객센터</HeaderMenu></NavLink>&nbsp;
//                 <NavLink to="/Cart" activeStyle={activeStyle}><HeaderMenu>장바구니</HeaderMenu></NavLink>
//             </Test>
//             </Container>
//             <Container>
//             <NavMenu>
//                 <NavMenuItem onMouseEnter>
//                     <A>반찬</A>
//                 </NavMenuItem>
//                 <NavMenuItem>
//                     <A>고기</A>
//                     </NavMenuItem>
//                     <NavMenuItem>
//                     <A>생선</A>
//                 </NavMenuItem>
//             </NavMenu>
//             <NavMenu>
//             <NavMenuItem >
//                     <A>국·탕</A>
//                 </NavMenuItem>
//                 <NavMenuItem >
//                     <A>국·탕</A>
//                 </NavMenuItem>
//                 <NavMenuItem >
//                     <A>찌개·전골</A>
//                 </NavMenuItem>
//             </NavMenu>
//             <NavMenu>
//             <NavMenuItem >
//                     <A>간식</A>
//                 </NavMenuItem>
//                 <NavMenuItem >
//                     <A>빵</A>
//                 </NavMenuItem>
//             </NavMenu>
//             <NavMenu>
//             <NavMenuItem >
//                     <A>음료</A>
//                 </NavMenuItem>
//                 <NavMenuItem >
//                     <A>우유</A>
//                 </NavMenuItem>
//             </NavMenu>
//             <NavMenu>
//             <NavMenuItem >
//                     <A>소스류</A>
//                 </NavMenuItem>
//                 <NavMenuItem >
//                     <A>소스·드레싱</A>
//                 </NavMenuItem>
//             </NavMenu>
//             </Container>
//         </MarginContainer>
//     );
// };

// export default Header;
