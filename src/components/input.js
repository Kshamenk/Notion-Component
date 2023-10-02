import styled, { css } from "styled-components";

const Input = styled.input`
  border: none;
  padding: 5px 10px;
  box-sizing: border-box;
  outline: none;
  

  ${(props) =>
    props.border &&
    css`
      border-left: solid 2px #ccc;
    `};
`;

export default Input;
