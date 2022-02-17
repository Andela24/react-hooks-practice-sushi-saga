import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [listSushi, setListSushi]= useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [money, setMoney] = useState(100)

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(listSushi => setListSushi(listSushi))
}, [])

function handleEatenSushi(sushi) {
  setEatenSushi([...eatenSushi, sushi])
  handleRestOfMoney(sushi)
}

function handleRestOfMoney (eatenSushi) {
    setMoney((money) => money - eatenSushi.price);
}

  return (
    <div className="app">
      <SushiContainer listSushi={listSushi} handleEatenSushi={handleEatenSushi} money={money} />
      <Table eatenSushi={eatenSushi} money={money}/>
    </div>
  );
  }

export default App;
