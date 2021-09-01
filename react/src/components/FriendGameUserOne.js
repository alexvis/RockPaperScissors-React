import React from 'react';

const FrienGameUserOne = (props) => {

  let result
  if(props.resultGame === null){
    result =
      <div className="row">
        <div className="userInputBox large-12 small-12 columns">
        <h3 className="playerOne">{props.playerOne}</h3>
          <div className="rock large-4 small-12 columns" onClick={props.handleRockClickOne}></div>
          <div className="paper large-4 small-12 columns" onClick={props.handlePaperClickOne}></div>
          <div className="scissors large-4 small-12 columns" onClick={props.handleScissorsClickOne}></div>
      </div>
      </div>
  } else {
      result =
        <div className="row">
          <div className="userInputBox large-12 small-12 columns">
          <h3 className="playerOne">{props.playerOne}</h3>
            <div className="rock large-4 small-12 columns" >{props.rock}</div>
            <div className="paper large-4 small-12 columns" >{props.paper}</div>
            <div className="scissors large-4 small-12 columns" >{props.scissors}</div>
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

export default FrienGameUserOne;
