import React from 'react';

const FriendGameUserTwo = (props) => {

  let result

  if(props.resultGame === null){
    result =
      <div className="row">
        <div className="userInputBox two">
          <h3 className="playerTwo">{props.playerTwo}</h3>
          <div className="rock two" onClick={props.handleRockClickTwo}></div>
          <div className="paper two" onClick={props.handlePaperClickTwo}></div>
          <div className="scissors two" onClick={props.handleScissorsClickTwo}></div>
        </div>
      </div>

  } else {
    result =

      <div className="row">
        <div className="userInputBox two">
          <h3 className="playerTwo">{props.playerTwo}</h3>
          <div className="rock two" >{props.rock}</div>
          <div className="paper two" >{props.paper}</div>
          <div className="scissors two" >{props.scissors}</div>
          <button className="button" onClick={props.cleanOnClick}>
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

export default FriendGameUserTwo;
