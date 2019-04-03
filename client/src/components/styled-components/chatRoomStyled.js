import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e74c3c;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
`;

export const ChatSubContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  box-shadow: 0px 0px 5px 5px #c0392b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

export const ChatterInput = styled.div`
  height: 10%;
  box-shadow: 0 -1px 0 0 #ecf0f1;
  transition: 0.3s;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.3s;
    box-shadow: 0 -3px 0 0 #ecf0f1;
  }
  & input {
    width: 100%;
    font-size: 18px;
    padding: 2px;
  }
  & button {
    font-size: 18px;
    padding: 4px;
    width: 10%;
    border-style: none;
    background-color: #2ecc71;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      background-color: #27ae60;
      transition: 0.2s;
    }
  }
`;

export const Message = styled.div`
  width: 100%;
  background-color: #ecf0f1;
  padding: 10px;
  & div:first-child {
    font-weight: bold;
  }
  border-bottom: 2px solid white;
`;

export const HeaderChat = styled.div`
  width: 50%;
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 5px #c0392b;
`;
