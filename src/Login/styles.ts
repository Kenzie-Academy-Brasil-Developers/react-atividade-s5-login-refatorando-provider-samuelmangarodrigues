import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 200px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  align-items: center;
  border: 1px solid #e1a8a8;
  border-radius: 4px;
  span {
    color: red;
    font-size: 13px;
  }
  input {
    margin: 5px;
    width: 150px;
    height: 20px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 3px;
    :hover {
      border-color: rgb(33, 209, 33);
      transition: 0.2s;
    }
  }
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px;
  :hover {
    border-color: rgb(56, 171, 225);
    color: rgb(56, 171, 225);
    transition: 0.2s;
  }
`;
export const Title = styled.div`
  font-size: 25px;
  margin: 30px;
  color: black;
  font-family: "Roboto", sans-serif;
`;
