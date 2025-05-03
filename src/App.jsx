import { useState, useEffect } from 'react'
import Navbar from './Components/navbar.jsx'
import './App.css'

function App() {
  const [gameover, setGameover] = useState(false);
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const result = checkWinner();
    if (result) {
      setWinner(result);
      setGameover(true);
    }
  }, [boxes]);

  const handleClick = (index) => {
    if (boxes[index] === "") {
      const newBoxes = [...boxes];
      newBoxes[index] = turn;
      setBoxes(newBoxes);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const res = () => {
    setBoxes(Array(9).fill(""));
    setTurn("X");
    setGameover(false);
  }

  const checkWinner = () => { 
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (boxes[a]!=="" && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setGameover(true);
        return boxes[a];
      }
    }
    return null;
  }

  return (
    <>

    <Navbar/>
    <div className="body flex justify-evenly bg-yellow-200 h-screen mt-[64px]">
    
    <div className='playarea grid grid-rows-[repeat(3,10vw)] grid-cols-[repeat(3,10vw)] font-bold text-2xl'>
    {boxes.map((value, index) => (
        <div
          key={index}
          className="boxplay border-2 border-black flex items-center justify-center text-[clamp(2rem,2vw,3rem)] cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {value}
        </div>
      ))}
    </div>

    <div className='info'>
      <h1> WELCOME TO TIC TAC TOE </h1>
      <div> 
        {!gameover? <span> TURN FOR {turn}</span> : <span> {winner} WINS</span>}   
        <button id="reset" class="cursor-pointer bg-amber-700 rounded-[4px] p-2" onClick={res}>RESET</button>
      </div>

    </div>
    
    
    
    </div>
    </>
  )
}

export default App
