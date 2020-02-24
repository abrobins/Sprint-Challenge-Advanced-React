import React from "react";
import Styled from "styled-components";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #D3D3D3;
  box-shadow: 2px 2px #000000;
  border-radius: 1.5rem;
`;

const PlayerList = props => {
  return (
    <div data-testid="player-list">
      <Cards className="players">
        {props.players.map(item => (
          <Card className="player-card">
            <h4>
              <p>Player Name: {item.name}</p>

              <p>Country: {item.country}</p>
              <p>Searches: {item.searches}</p>
            </h4>
          </Card>
        ))}
      </Cards>
    </div>
  );
};
export default PlayerList;
