import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  * {
    font-family: Roboto, Arial, sans-serif;
  }
  img {
    width: 250px;
    margin: 10px 0 30px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px 10px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #3e1f47;
    height: 42px;
    border: 0;
    border-radius: 21px;
    width: 200px;
    text-transform: uppercase;
    font-weight: 600;
  }
  button:hover {
    background: #f2994a;
    cursor: pointer;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`