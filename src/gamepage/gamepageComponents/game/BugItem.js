import { useSelector, useDispatch } from 'react-redux';
import {increaseScore, scoreSelector, loseALife} from '../../../redux/scoreSlice';
import { BugOne } from '../../../Resources/SVGcomponents/BugOne';
import professor from '../../../Resources/Images/professor.svg';

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
            <button className='gridItem bugItem' onClick={handleClick}><BugOne /></button> 
            : 
            <button className='gridItem nonBugItem' onClick={handleBadClick}><img className='grid-professor' src={professor} alt='professor'></img></button>}
        </div>
    )
}