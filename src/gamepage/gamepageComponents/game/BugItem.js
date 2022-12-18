import { useSelector, useDispatch } from 'react-redux';
import {increaseScore, scoreSelector, loseALife} from '../../../redux/scoreSlice';
import { randomIndexForBugItemSelector } from '../../../redux/gridSlice';

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
import professor from '../../../Resources/Images/professor.svg';
import computer1 from '../../../Resources/Images/computer1.svg';
import computer2 from '../../../Resources/Images/computer2.svg';
import computer3 from '../../../Resources/Images/computer3.svg';
import computer4 from '../../../Resources/Images/computer4.svg';
import computer5 from '../../../Resources/Images/computer5.svg';
import computer6 from '../../../Resources/Images/computer6.svg';
import computer7 from '../../../Resources/Images/computer7.svg';
import computer8 from '../../../Resources/Images/computer8.svg';
import computer9 from '../../../Resources/Images/computer9.svg';


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


// Unable to create a working method of having these arrays in a seperate file/function. It would only render the alt text and handleClick didn't work. 
// Will include in github notes for anyone that wants the challenge. 
    const bugImageArray = [
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug1} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug2} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug3} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug4} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug5} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug6} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug7} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug8} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug9} alt='bug'></img></button>,
        <button className='gridItem appear bugItem' onClick={handleClick}><img className='gridBug twitch' src={bug10} alt='bug'></img></button>
    ]; 

    const nonBugImageArray = [
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img className='gridProfessor' src={professor} alt='professor'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer1} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer2} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer3} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer4} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer5} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer6} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer7} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer8} alt='computer'></img></button>,
        <button className='gridItem nonBugItem' onClick={handleBadClick}><img  src={computer9} alt='computer'></img></button>
    ]



    return (
        <div>
            {showingBug ? 
             bugImageArray[randomIndexForBugItem]
            : 
             nonBugImageArray[randomIndexForBugItem]
            }
        </div>
    )

}