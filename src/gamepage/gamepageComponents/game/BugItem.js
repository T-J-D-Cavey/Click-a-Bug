import { useSelector, useDispatch } from 'react-redux';
import {increaseScore, scoreSelector, loseALife} from '../../../redux/scoreSlice';
import { randomIndexForBugItemSelector } from '../../../redux/gridSlice';
import professor from '../../../Resources/Images/professor.svg';
import bug1 from '../../../Resources/Images/bug1.svg';
import bug2 from '../../../Resources/Images/bug2.svg';
import bug3 from '../../../Resources/Images/bug3.svg';
import bug4 from '../../../Resources/Images/bug4.svg';
import bug5 from '../../../Resources/Images/bug5.svg';
import bug6 from '../../../Resources/Images/bug6.svg';
import bug7 from '../../../Resources/Images/bug7.svg';
import bug8 from '../../../Resources/Images/bug8.svg';
import bug9 from '../../../Resources/Images/bug9.svg';
import bug10 from '../../../Resources/Images/bug10.svg';


export function BugItem({handleDispatch, showingBug}) {
    const dispatch = useDispatch();
    const score = useSelector(scoreSelector);
    const randomIndexForBugItem = useSelector(randomIndexForBugItemSelector);
    
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



// Unable to create a working method of having this array in a seperate fill/function. It would only render the alt text and handleClick didn't work. 
// Will include in github notes for anyone that wants the challenge. 
    const bugImageArray = [
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug rotateRight' src={bug1} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug2} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug rotateLeft' src={bug3} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug4} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug rotateLeft' src={bug5} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug6} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug7} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug8} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug rotateRight' src={bug9} alt='bug'></img></button>,
       <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug10} alt='bug'></img></button>
    ]; 



    return (
        <div>
            {showingBug ? 
             bugImageArray[randomIndexForBugItem]
            : 
            <button className='gridItem nonBugItem' onClick={handleBadClick}><img className='gridProfessor' src={professor} alt='professor'></img></button>}
        </div>
    )

}