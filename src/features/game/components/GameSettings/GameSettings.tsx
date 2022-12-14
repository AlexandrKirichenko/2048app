import React, { FC } from 'react';
import styled from 'styled-components';
import { BsMoonStars } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';

interface GameSettings {
  selectedTheme: string;
  changeTheme: () => void;
  newGame: () => void;
}

export const GameSettings: FC<GameSettings> = ({
  selectedTheme = 'light',
  changeTheme,
  newGame,
}) => {
  return (
    <Wrapper>
      <MoonButton onClick={changeTheme}>
        {selectedTheme === 'light' ? (
          <span role="img" aria-label={selectedTheme}>
            <BsMoonStars />
          </span>
        ) : (
          <span role="img" aria-label={selectedTheme}>
            <BiSun color="#FFCD38FF" size="1.2em" />
          </span>
        )}
      </MoonButton>
      <NewGame onClick={newGame}>
        <Label>New Game</Label>
      </NewGame>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MoonButton = styled.button`
  background-color: transparent;
  padding: 5px;
  text-transform: capitalize;
  font-size: 32px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const NewGame = styled.button`
  min-width: 100px;
  text-align: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 5px;
  text-transform: capitalize;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Label = styled.div`
  color: ${(props) => props.theme.labelColor};
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
`;
