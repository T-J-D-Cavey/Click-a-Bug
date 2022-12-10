import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {endGame, liveGameSelector, startGame} from '../../redux/gridSlice';

export function StartGame() {
  const dispatch = useDispatch();
  
  useSelector(liveGameSelector);

  const handleClick = (e) => {
     e.preventDefault()
     dispatch(startGame());
  }

  
  // Need to attach an onClick event to the button, which sends a dispatch to change the state of liveGame to false, and changes stae on randomIndex to a random number
    return (
      <div>
         <h1>Welcome to the lab...</h1>
         <button onClick={handleClick}><Link to="/lab/game">Play Game</Link></button>                
      </div>
    )
}