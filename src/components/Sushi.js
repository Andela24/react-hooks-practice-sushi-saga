import React, {useState} from "react";

function Sushi({sushi, handleEatenSushi, money}) {
  console.log(sushi)
const [eaten, setEaten] = useState(false)

  function handleClick() {
    if(!eaten && money >= sushi.price) {
      setEaten(true)
      handleEatenSushi(sushi)
       // console.log(sushi)
    }
    else if(!eaten && money <= sushi.price) {
      alert("You don't have enough money.")
    }
    else {
      alert("Can't eat me!")
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
