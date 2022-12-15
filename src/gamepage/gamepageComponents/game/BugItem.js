import { useSelector, useDispatch } from 'react-redux';
import {increaseScore, scoreSelector, loseALife} from '../../../redux/scoreSlice';
import { BugOne } from '../../../Resources/SVGcomponents/BugOne';
import professor from '../../../Resources/Images/professor.svg';
import bugTwo from '../../../Resources/Images/bugTwo.svg';
import { randomIndexSelector } from '../../../redux/gridSlice'; 

// I suspect the logic in this function is the cause of a glitchy grid which sometimes renders a professor or a bug on the same index/gridItem. 
// The reason for this I suspect is that the function runs several times and therefore sometimes the result of showingBug is true and sometimes it's false.
// I tried to refactor the logic so that it runs in a useEffect whenever randomIndex changes, but this changed the showingBug variable after the render. So showing Bug was always false.
// I need to think again about this to try and improve. Not a blocker as the game still functions. 
export function BugItem({handleDispatch}) {
    const dispatch = useDispatch();
    const score = useSelector(scoreSelector);
    
    const handleClick = (e) => {
        e.preventDefault();
        handleDispatch();
        dispatch(increaseScore());
    }

    const handleBadClick = (e) => {
        e.preventDefault();
        handleDispatch();
        dispatch(loseALife());
    }
    const sometimesFalse = () => {
        let n;
        n = Math.floor(Math.random() * 20);
        if (score > 800 && n > 7) {
            return true;
        } else if (n > 1) {
            return true;
        } 
        return false;
    }



    let showingBug = sometimesFalse()


    return (
        <div>
            {showingBug ? 
            <button className='gridItem bugItem' onClick={handleClick}><img className='gridBugTwo' src={bugTwo} alt='bug'></img></button> 
            : 
            <button className='gridItem nonBugItem' onClick={handleBadClick}><img className='gridProfessor' src={professor} alt='professor'></img></button>}
        </div>
    )
}