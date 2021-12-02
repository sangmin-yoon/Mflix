import React from "react";
import styled from "styled-components";
import "../CssAnimation/Loader.css";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Loader = () => (
  <Container>
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-text">loading</div>
    </div>
  </Container>
);

export default Loader;
