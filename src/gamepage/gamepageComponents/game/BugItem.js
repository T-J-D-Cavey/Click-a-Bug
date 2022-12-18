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
    
 // New code to get multiple pictures for pictures:

    const bugImageArray = [
        <button className='gridItem bugItem' onClick={handleClick}><img className='gridBug' src={bug1} alt='bug'></img></button>,
        <button className='gridItem bugItem' onClick={handleClick}><img className='gridBug' src={bug1} alt='bug'></img></button>,
        <button className='gridItem bugItem' onClick={handleClick}><img className='gridBug' src={bug1} alt='bug'></img></button>  
    ]; 

    console.log(randomIndexForBugItem);
    // const choosePictureWithRandomIndex = () => {
    //     let n;
    //     n = Math.floor(Math.random() * 2)
    //     return n;
    // }
    // let pictureIndex = choosePictureWithRandomIndex();
    // console.log(pictureIndex);
    // return (
    //     <div>
    //         {bugImageArray[randomIndexForBugItem]}
    //     </div>
    // )
// End of code to get multiple picture

    return (
        <div>
            {showingBug ? 
             bugImageArray[randomIndexForBugItem]
            : 
            <button className='gridItem nonBugItem' onClick={handleBadClick}><img className='gridProfessor' src={professor} alt='professor'></img></button>}
        </div>
    )


    // return (
    //     <div>
    //         {showingBug ? 
    //         <button className='gridItem bugItem' onClick={handleClick}><img className='gridBugTwo' src={bugTwo} alt='bug'></img></button> 
    //         : 
    //         <button className='gridItem nonBugItem' onClick={handleBadClick}><img className='gridProfessor' src={professor} alt='professor'></img></button>}
    //     </div>
    // )
}