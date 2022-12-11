import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {liveGameSelector, startGame} from '../../redux/gridSlice';
import { resetScore, scoreSelector, completedSelector } from '../../redux/scoreSlice';

export function StartGame() {
  const dispatch = useDispatch();
  
  const liveGame = useSelector(liveGameSelector);
  const score = useSelector(scoreSelector)
  const completed = useSelector(completedSelector);

  const handleClick = (e) => {
     e.preventDefault()
     dispatch(startGame());
     dispatch(resetScore());
  }
   
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
}