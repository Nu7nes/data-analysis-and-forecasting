import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: block;
  margin: 0.3rem 0;
  position: relative;
`;

export const InputFirstLabelStyled = styled.label`
  display: block;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

export const InputStyled = styled.input`
box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const InputLastLabelStyled = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  /* margin-left: 0.3rem; */
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translate(-50%, 0);
`;
