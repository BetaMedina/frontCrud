import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import ReactToExcel from 'react-html-table-to-excel';

export const Wrapper = styled.div`
  height: calc(100vh + 10px);
  background: #f2f2f2;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const Table = styled.table`
  width: 100%;
  thead tr th {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #444;
    &:nth-child(5) {
      text-align: center;
    }
  }
  tbody tr td {
    color: #666;
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    padding: 16px 0;
    border-bottom: 1px solid #eee;
    a {
      font-size: 14px;
      line-height: 18px;
      font-weight: normal;
      transition: color 0.5s;
      color: #4d85ee;
      &:hover {
        color: ${darken(0.03, '#4D85EE')};
      }
    }

    &:nth-child(5) {
      text-align: center;
    }
    &:last-child {
      text-align: right;
    }
  }
  tbody tr:last-child td {
    border-bottom: 0;
  }
`;
export const DeleteButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  transition: color 0.5s;
  border: 0;
  background: none;
  color: #de3b3b;
  margin-left: 23px;
  &:hover {
    color: ${darken(0.03, '#de3b3b')};
  }
`;

export const Content = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
export const Text = styled.h1`
  margin-bottom: 20px;
  font-size: 25px;
  color: #444;
`;

export const SearchForm = styled.form`
  position: relative;
  align-items: center;
  display: flex;
  margin-left: 16px;
  svg {
    position: absolute;
    left: 16px;
  }
  input {
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 40px;
    padding-right: 16px;
    font-size: 14px;
    line-height: 16px;
    &::placeholder {
      color: #999;
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  h1 {
    color: #444;
    font-size: 25px;
    line-height: 28px;
    font-weight: bold;
  }
  aside {
    display: flex;
    margin-left: 10px;
  }
`;

export const RegisterLink = styled(Link)`
  display: flex;
  align-items: center;
  background: ${props => (props.color ? props.color : '#ee4d64')};
  padding: 10px 16px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.5s;
  height: 36px;
  &:hover {
    background: ${props =>
      props.color ? darken(0.03, props.color) : darken(0.03, '#ee4d64')};
  }
  svg {
    margin-right: 8px;
  }
`;
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  background: #ee4d64;
  padding: 10px 16px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.5s;
  border: none;
  margin-left: 10px;
  height: 36px;
  &:hover {
    background: ${darken(0.03, '#ee4d64')};
  }
  svg {
    margin-right: 8px;
  }
`;

export const Excel = styled(ReactToExcel)`
  display: flex;
  align-items: center;
  background: #043927;
  padding: 10px 16px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.5s;
  border: none;
  margin-right: 10px;
  height: 36px;
  &:hover {
    background: ${darken(0.03, '#043927')};
  }
  svg {
    margin-right: 8px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 3%;
    height: 4vh;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    text-indent: 10px;

    ::-moz-placeholder {
      font-family: Arial, Helvetica, sans-serif;
      padding: 10%;
    }
  }
  b {
    font-style: roboto;
    color: #444444;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 3px;
  }
`;
export const SelectStyled = styled.select`
  margin-bottom: 5%;
  height: 4vh;
  width: 100%;
  text-indent: 2px;
  border: 1px solid #dddddd;

  padding-bottom: 10px;
`;
