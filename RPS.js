const getUserChoice = userInput  => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
    return userInput;
  } else {
    return 'Error!! Please check you message again!';
  }
}


const getComputerChoice = () => {
  randomNum= Math.floor(Math.random()*3);
    switch (randomNum) {
      case 0 :
        return 'paper';
      case 1 :
        return 'rock';
      case 2 :
        return 'scissors';
    } 
}

const determineWinner = (getUserChoice , getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return 'This game was a tie' 
  }
  if (getUserChoice === 'paper') {
    if (getComputerChoice ==='rocks') {
      return 'You Win!';
    } else {
      return 'Computer Win!';
    }
  }
  if (getUserChoice === 'rock') {
    if (getComputerChoice === 'scissors') {
      return 'You Win!';
    } else {
      return 'Computer Win!';
    }
  }
  if (getUserChoice === 'scissors') {
    if(getComputerChoice === 'paper') {
      return 'You Win!';
    } else {
      return 'Computer Win!';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw : ${userChoice}`);
  console.log(`Computer threw : ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();