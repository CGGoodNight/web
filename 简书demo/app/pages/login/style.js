import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background-color: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  button:hover {
    background-color: #187cb7;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  background-color: rgba(181, 181, 181, 0.1);
  border: 1px solid rgb(200, 200, 200);
  padding: 4px 12px 4px 20px;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  &.pw {
    margin-top: -1px;
    border-radius: 0 0 4px 4px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: rgb(49, 148, 208);
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  
`;
