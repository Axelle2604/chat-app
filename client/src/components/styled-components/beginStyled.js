import styled from 'styled-components';

export const BeginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e74c3c;
  & h1 {
    font-family: 'Patrick Hand', cursive;
    font-size: 5em;
    transform: rotate(-5deg);
    color: #f1c40f;
  }
`;

export const Container = styled.div`
  background-color: white;
  padding: 40px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 10px #c0392b;
`;

export const UserNameInput = styled.input`
  width: 100%;
  font-size: 20px;
  text-align: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
`;

export const SignInButton = styled.button`
  border-style: none;
  font-size: 20px;
  background-color: #2ecc71;
  color: white;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: #27ae60;
    & i {
      transform: rotate(-5deg);
      transition: 0.2s;
    }
  }
`;
