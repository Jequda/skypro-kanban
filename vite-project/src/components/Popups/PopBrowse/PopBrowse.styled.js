import styled from "styled-components";
import { topicStyles } from "../../../lib/topic";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`
export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`
export const Content = styled.div`
  display: block;
  text-align: left;
`
export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`
export const TopCategory = styled.div`
display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  opacity: 1 !important;

  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
`
export const Status = styled.div`
  margin-bottom: 11px;
`
export const Subtitle = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`
export const Themes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`
export const StatusTheme = styled.div`
  border-radius: 24px;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  background: #94a6be;
  color: #ffffff;
`
export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const Form = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`
export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`
export const ButtonBrowse = styled.div`
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

`
export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
`
export const ButtonEdit = styled.button`
  max-width: 170px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`
export const PopCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`
export const RadioToolbarLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  margin-right: 7px;
  opacity: 0.4;
  white-space: nowrap;
  border-radius: 24px;
  padding: 11px 14px 10px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

    &:hover {
      opacity: 1 !important;
      background: #94a6be; 
    color: #ffffff;
  }
    
`
export const RadioToolbarInput = styled.input`
  display: none;
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  
  
  

  &:checked+label {
    opacity: 1 !important;
    background: #94a6be; 
    color: #ffffff;
}
`
export const TitleInput = styled.input`
  outline: none;
  padding: 3px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`
