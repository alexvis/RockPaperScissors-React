import React from 'react';

const FrienGameUserOne = (props) => {



  let result
  if(props.resultGame === null){
    result =
      <div className="row">
        <div className="userInputBox">
          <h3 className="playerOne">{props.playerOne}</h3>
          <div className="rock one" onClick={props.handleRockClickOne}></div>
          <div className="paper one" onClick={props.handlePaperClickOne}></div>
          <div className="scissors one" onClick={props.handleScissorsClickOne}></div>
      </div>
      </div>
  } else {
      result =
        <div className="row">
          <div className="userInputBox">
            <h3 className="playerOne">{props.playerOne}</h3>
            <div className="rock one" >{props.rock}</div>
            <div className="paper one" >{props.paper}</div>
            <div className="scissors one" >{props.scissors}</div>
            <button className="button friendGame" onClick={props.cleanOnClick}>
              Start Over
            </button>
          </div>
        </div>

  }

  return(
    <div>
      {result}
    </div>

  )
}

export default FrienGameUserOne;
