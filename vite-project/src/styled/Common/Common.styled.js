import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const StyledButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
  background-color: #33399b;
  }
  a {
  color: #ffffff;
  }
`;

export const StyledButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;

  a {
  width: 100%;
  height: 100%;
  color: #565eef;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  &:hover {
  background-color: #33399b;
  color: #ffffff;
   a {
    color: #ffffff;
    } 
  }

`;