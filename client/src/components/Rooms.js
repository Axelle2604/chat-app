import React from 'react';
import {
  RoomsContainer,
  HeaderRooms,
  BodyRooms,
  CreateRoomButton,
  RoomButton,
} from './styled-components/roomsStyled';

const Rooms = ({
  roomsTab,
  onClickCreateRoom,
  joinRoom,
  onClickDeleteRoom,
}) => {
  const onClickJoinRoom = roomName => {
    joinRoom(roomName);
  };

  return (
    <RoomsContainer>
      <HeaderRooms>
        <CreateRoomButton onClick={onClickCreateRoom}>
          Create new room
        </CreateRoomButton>
      </HeaderRooms>
      <BodyRooms>
        {roomsTab.map(room => (
          <RoomButton key={room}>
            Room {room}
            <i
              className="fas fa-person-booth"
              onClick={onClickJoinRoom.bind(this, room)}
            />
            <i
              className="fas fa-minus-square"
              onClick={onClickDeleteRoom.bind(this, room)}
            />
          </RoomButton>
        ))}
      </BodyRooms>
    </RoomsContainer>
  );
};

export default Rooms;
