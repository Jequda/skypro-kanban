import { styled, css } from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
  width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HoverEffects = {
  hover03: css`
    &:hover {
    background-color: #33399b;
    color: #ffffff;
    }
    &:hover a {
    color: #ffffff;
    }
  `,
}

export const ButtonNewMain = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }  

  a {
  color: #ffffff;
  }
`;

export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565eef;
  border-bottom: 1.9px solid #565eef;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
  }

  &:hover {
  color: #33399b;
  }
  &hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
  }
`;

export const UserSetTarget = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopExitButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const PopUserSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  }

  input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94a6be;
  transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
  left: 12px;
  }
`;