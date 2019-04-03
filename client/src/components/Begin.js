import React from 'react';
import {
  BeginContainer,
  Container,
  UserNameInput,
  ContainerInput,
  SignInButton,
} from './styled-components/beginStyled';

const Begin = ({
  userName,
  changeInputUserName,
  onClickChat,
  onKeyDownInputUserName,
}) => {
  const onKeyDown = ({ keyCode }) => {
    onKeyDownInputUserName(keyCode);
  };

  return (
    <BeginContainer>
      <Container>
        <h1>Chat2gethR</h1>
        <ContainerInput>
          <UserNameInput
            type="text"
            value={userName}
            onChange={changeInputUserName}
            placeholder="Choose a username"
            onKeyDown={onKeyDown}
          />
          <SignInButton onClick={onClickChat}>
            <i className="fas fa-sign-in-alt" />
          </SignInButton>
        </ContainerInput>
      </Container>
    </BeginContainer>
  );
};

export default Begin;
