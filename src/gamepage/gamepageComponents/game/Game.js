import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
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
    const navigate = useNavigate()
    let randomIndex = useSelector(randomIndexSelector);
    const score = useSelector(scoreSelector);
    let intervalTime;
       

    const handleDispatch = () => {
        // I recently moved this createRandomIndex function from outside to inside of this handleDispatch function to try and improve performance. 
        // No apparent change. Look out for side affects. 
        const createRandomIndex = () => {
            let n;
            n = Math.floor(Math.random() * 16);
            return n;
        }
        let n = createRandomIndex();        
        dispatch(setRandomIndex(n));
        if (score >= 1000) {
                    dispatch(completedGame());
                    dispatch(endGame());
                    navigate('/lab');
                } 
                return;
    }

    const handleSpeakToTimClick = (e) => {
        e.preventDefault();
        dispatch(endGame()); 
    }

// Need to add a new action to the score slice to reduce the score by 10, import it here, and then add a handleClick function here which sends a dispatch, pass it as a prop to blank item, 
// add an onCLick listner to the blankItem button which calls a function which invokes this handleClick function, so the score is reduced by 10

// Need to change this to a Switch/Case:
    useEffect(() => {
        if (score >= 1000) {
            intervalTime = 100000;
        } else if (score > 900) {         
            intervalTime = 550;
        } else if (score > 750) {         
            intervalTime = 600;
        } else if (score > 500) {         
            intervalTime = 800;
        } else if (score > 250) {         
            intervalTime = 900;
        } else if (score > 100) {         
            intervalTime = 1000;
        } else {
            intervalTime = 1100;
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
            <button onClick={handleSpeakToTimClick}><Link to="/lab">Speak to Tim</Link></button> 
        </div>
    )
}