import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {startGame} from '../../redux/gridSlice';
import { resetScore, completedSelector } from '../../redux/scoreSlice';
import { BugOne } from '../../Resources/SVGcomponents/BugOne';
import professor from '../../Resources/Images/professor.svg';

export function StartGame({setCountdown, countdown}) {
  const dispatch = useDispatch();
  const completed = useSelector(completedSelector);
  

  const handleClick = (e) => {
     e.preventDefault()
     dispatch(startGame());
     dispatch(resetScore());
     setCountdown('0');
  }
   
  if (completed) {
    return (
   
    <div>
       <BugOne />
       <h1>Well done, you got rid of the bugs!</h1>
       <h2>You completed click-a-bug in {180 - countdown} seconds!</h2>
       <p>You only had {countdown} seconds left!!</p>
       <p>Can you beat your time?</p>
       <button onClick={handleClick}><Link to="/lab/game">PLAY AGAIN</Link></button>                
    </div> 
    )
  } else {
    return (
   
      <div>
        <BugOne />
        <img className='professorPic professorStart' src={professor} alt='professor'></img>
         <h1>Ready to start?</h1>
         <button onClick={handleClick}><Link to="/lab/game">PLAY GAME</Link></button>                
      </div>
    )
  }
}