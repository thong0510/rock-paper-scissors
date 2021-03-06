import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./compornents/PublicNavbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import ChoiceCard from "./compornents/ChoiceCard";
import "./App.css";

const shapes = ["rock", "paper", "scissors"];
const roundOutCome = {
  rock: { rock: 0, paper: -1, scissors: 1 },
  paper: { rock: 1, paper: 0, scissors: -1 },
  scissors: { rock: -1, paper: 1, scissors: 0 },
};

const App = () => {
  const [playerTitle, setPlayerTitle] = useState("You");
  const [playerChoice, setPlayerChoice] = useState("rock");
  const [playerWin, setPlayerWin] = useState(0);

  const [computerTitle, setComputerTitle] = useState("Computer");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [computerWin, setComputerWin] = useState(0);

  const getRoundOutCome = (playerChoice, computerChoice) => {
    const result = roundOutCome[playerChoice][computerChoice];
    setPlayerWin(result);
    setComputerWin(-result);

    // if (playerChoice === 'rock' && computerChoice === 'paper') {
    //   setPlayerWin(-1)
    //   setComputerWin(1)
  };

  const getRandomPlay = () => {
    const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    setPlayerChoice(newPlayerChoice);
    setComputerChoice(newComputerChoice);
    getRoundOutCome(newPlayerChoice, newComputerChoice);
  };

  return (
    <>
      <PublicNavbar />
      <Container>
        <h1 className="text-center">Rock Paper Scissors</h1>
        <Button onClick={getRandomPlay}>Play random</Button>
        <Row>
          <Col>
            <ChoiceCard
              title={playerTitle}
              winner={playerWin}
              shape={playerChoice}
            />
          </Col>
          <Col>
            <ChoiceCard
              title={computerTitle}
              winner={computerWin}
              shape={computerChoice}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
