import { useSelector, useDispatch } from 'react-redux';
import {increaseScore, scoreSelector, loseALife} from '../../../redux/scoreSlice';



export function BugItem({handleDispatch}) {
    const dispatch = useDispatch();
    
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
        if (n > 1) {
            // When the timer and score state is defined, refine this so it returns false more often during higher scores and less time remaining; 
            return true;
        } 
        return false;
    }

   let showingBug = sometimesFalse()



    return (
        <div className='grid-item'>
            {showingBug ? <button className='bugItem' onClick={handleClick}>BUG Picture!</button> : <button className='nonBugItem' onClick={handleBadClick}>Not a bug!</button>}
        </div>
    )
}