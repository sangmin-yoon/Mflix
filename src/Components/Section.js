import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;

// PropTypes 종류
// - array: 배열
// - arrayOf: 특정 propType으로 이루어진 배열
// - bool: true or false 값
// - func: 함수
// - number: 숫자
// - object: 객체
// - string: 문자열
// - symbol: ES6의 Symbol
// - node: 렌더링할 수 있는 모든 것(숫자, 문자열, JSX코드)
// - instanceOf: 특정 클래스의 인스턴스(ex: instanceOf(MyClass))
// - oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
// - oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
// - objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
// - shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
// - any: 아무 종류
