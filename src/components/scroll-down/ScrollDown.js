import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  animation: 3s linear 1s infinite normal none running MoveUpDown;
  .turn {
      font-size: 30px;
    cursor: pointer;
    transform: rotate(90deg);
  }
@keyframes MoveUpDown{
    0%, 100%{
    }
    50%{
        bottom:100px
    }
}
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div >
        <a href="#about" className="turn nav-link">&#8608;</a>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;