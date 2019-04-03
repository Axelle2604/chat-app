import styled from 'styled-components';

const BaseButton = styled.button`
  border-style: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
  }
`;

export const RoomsContainer = styled.div`
  background-color: #e74c3c;
  height: 100vh;
  width: 100vw;
`;

export const HeaderRooms = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BodyRooms = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CreateRoomButton = styled(BaseButton)`
  background-color: #2ecc71;
  font-size: 20px;
  margin: 30px;
  color: white;
  &:hover {
    background-color: #27ae60;
    cursor: pointer;
  }
`;

export const RoomButton = styled(BaseButton)`
  margin: 20px;
  width: 100px;
  height: 100px;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & i {
    margin-top: 10px;
    font-size: 20px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.5);
    }
    &:first-child {
      color: #2ecc71;
      &:hover {
        color: #27ae60;
        cursor: pointer;
      }
    }
    &:nth-child(2) {
      color: #e74c3c;
      &:hover {
        color: #c0392b;
        cursor: pointer;
      }
    }
  }
  &:hover {
    background-color: #ffffff;
    transform: rotate(-2deg);
  }
`;
