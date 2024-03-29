import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`
export const ContainerSignup = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color:${props => props.theme.body};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${props => props.theme.bd};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
export const ModalTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`
export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:not(:last-child) {
    margin-bottom: 7px;
  }
`
export const ModalInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  outline: none;
  padding: 10px 8px;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  border: 0.7px solid ${({ $isButtonLoading }) =>
    $isButtonLoading ? "#F84D4D" : "rgba(148, 166, 190, 0.4)"};

  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }
`
export const ModalButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${({ $isButtonLoading }) =>
    $isButtonLoading ? "#94A6BE" : "#565EEF"};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
`
export const ModalFormGroup = styled.div`
  text-align: center;
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;

  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
    text-decoration: underline;
  }
`
export const AlertMessage = styled.div`
 color: #F84D4D;
 font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  margin-top: 7px;
  text-align: center;
`