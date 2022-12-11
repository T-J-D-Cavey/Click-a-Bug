import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {endGame, liveGameSelector, startGame} from '../../redux/gridSlice';
import { resetScore, scoreSelector, completedSelector } from '../../redux/scoreSlice';
import { setRandomIndex } from '../../redux/gridSlice';

export function StartGame() {
  const dispatch = useDispatch();
  
  const liveGame = useSelector(liveGameSelector);
  const score = useSelector(scoreSelector)
  const completed = useSelector(completedSelector);

  const handleClick = (e) => {
     e.preventDefault()
     dispatch(startGame());
     dispatch(resetScore());
    //  Also need to dispatch a resetTimer when created
  }

  
  // Need to attach an onClick event to the button, which sends a dispatch to change the state of liveGame to false, and changes stae on randomIndex to a random number   
  if (completed) {
    return (
   
    <div>
       <h1>Well done, you got rid of the bugs!</h1>
       <h2>Your score: {score}</h2>
       <button onClick={handleClick}><Link to="/lab/game">Play again</Link></button>                
    </div> 
    )
  } else {
    return (
   
      <div>
         <h1>Welcome to the lab...</h1>
         <button onClick={handleClick}><Link to="/lab/game">Play Game</Link></button>                
      </div>
    )
  }



    //   }
    // return (
   
    //   <div>
    //      <h1>Welcome to the lab...</h1>
    //      <button onClick={handleClick}><Link to="/lab/game">Play Game</Link></button>                
    //   </div>
    // )
}