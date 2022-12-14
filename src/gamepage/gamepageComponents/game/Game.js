import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {BlankItem} from './BlankItem';
import {BugItem} from './BugItem';
import {randomIndexSelector, setRandomIndex} from '../../../redux/gridSlice';
import {endGame} from '../../../redux/gridSlice';
import { scoreSelector, completedGame } from '../../../redux/scoreSlice';

export function Game() {
    const dispatch = useDispatch();
    // Look for a better way to generate this array with a method:
    const gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let randomIndex = useSelector(randomIndexSelector);
    const score = useSelector(scoreSelector);
    let intervalTime;
       

    const createRandomIndex = () => {
        let n;
        n = Math.floor(Math.random() * 16);
        return n;
    }

    const handleDispatch = () => {
        let n = createRandomIndex();        
        dispatch(setRandomIndex(n));
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(endGame());
        if (score >= 1000) {
            dispatch(completedGame())
        } 
    }
// Need to change this to a Switch/Case:
    useEffect(() => {
        if (score >= 1000) {
            intervalTime = 100000;
        } else if (score > 900) {         
            intervalTime = 500;
        } else if (score > 750) {         
            intervalTime = 750;
        } else if (score > 500) {         
            intervalTime = 1000;
        } else if (score > 250) {         
            intervalTime = 2000;
        } else if (score > 100) {         
            intervalTime = 3000;
        } else {
            intervalTime = 4000;
            return;
        } 
    }, [score])

    useEffect(() => {

       handleDispatch();
       const interval = setInterval(() => {
            handleDispatch()    
        }, intervalTime);
        return () => clearInterval(interval);
    }, [score]);


    return (
        <div className='grid-container'>
            <div className='grid'>      
               {gridArray.map((element, index) => element !== randomIndex ? <BlankItem key={index} /> : <BugItem handleDispatch={handleDispatch} key={index}/>)}
            </div>
            <button onClick={handleClick}><Link to="/lab">Speak to Tim</Link></button> 
        </div>
    )
}