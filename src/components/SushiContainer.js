import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( {listSushi, handleEatenSushi, handleRestOfMoney, money} ) {
const [count, setCount] = useState(0)

  const displaySushi= listSushi.slice(count, count + 4).map(sushi => {
    return <Sushi
    key={sushi.id}
    sushi={sushi}
    handleEatenSushi= {handleEatenSushi}
    handleRestOfMoney={handleRestOfMoney}
    money={money}
    />
  })

  function updateCount() {
    setCount(count + 4)
  }
  return (
    <div className="belt">
      {displaySushi}
      <MoreButton updateCount={updateCount} />
    </div>
  );
}

export default SushiContainer;
