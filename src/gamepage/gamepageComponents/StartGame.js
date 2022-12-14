import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {startGame} from '../../redux/gridSlice';
import { resetScore, scoreSelector, completedSelector } from '../../redux/scoreSlice';
import professor from '../../Resources/Images/professor.svg';
import { DoorIcon } from '../../Resources/SVGcomponents/DoorIcon';

export function StartGame() {
  const dispatch = useDispatch();
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
       <h2>Your score was: {score}</h2>
       <button onClick={handleClick}><Link to="/lab/game">PLAY AGAIN</Link></button>                
    </div> 
    )
  } else {
    return (
   
      <div>
        <img className='professorPic professorStart' src={professor} alt='professor'></img>
         <h1>Ready to start?</h1>
         <button onClick={handleClick}><Link to="/lab/game">PLAY GAME</Link></button>                
      </div>
    )
  }
}