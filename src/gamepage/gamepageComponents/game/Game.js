import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {BlankItem} from './BlankItem';
import {BugItem} from './BugItem';
import {randomIndexSelector, setRandomIndex, showingBugSelector, setShowingBug} from '../../../redux/gridSlice';
import {endGame} from '../../../redux/gridSlice';
import { scoreSelector, completedGame, decreaseScore } from '../../../redux/scoreSlice';

export function Game() {
    const dispatch = useDispatch();
    // Look for a better way to generate this array with a method:
    const gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const navigate = useNavigate()
    let randomIndex = useSelector(randomIndexSelector);
    const showingBug = useSelector(showingBugSelector);
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
// When someone clicks on a blank item (server) an onClick event handler calls the function below to reduce the state score by 10:
    const handleDispatchDecreaseScore = () => {
        dispatch(decreaseScore());
    }

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

    // Code below is an attempt to fix the flicky bug/professor grid item in BugItem. 
    // I will unvoke within a useEffect (set to run after any changes in randomIndex state) a function that randomly chooses true and sometimes false, which 
    // will be defined below this useEffect. Inside the useEffect I will send the dispatch the setShowingBug and pass it the value of the function (tbc if it goes within this)  

    useEffect(() => {
       const trueOrFalse = sometimesFalse();   
       dispatch(setShowingBug(trueOrFalse));
     }, [randomIndex]);

     const sometimesFalse = () => {
        let n;
        n = Math.floor(Math.random() * 10);
        if (score > 800 && n > 4) {
            return true;
        } else if (score > 400 && n > 2) {
            return true;
        } else if (n > 1) {
            return true;
        } 
        console.log('was false')
        return false;
     }


    return (
        <div className='grid-container'>
            <div className='grid'>      
               {gridArray.map((element, index) => element !== randomIndex ? <BlankItem handleDispatchDecreaseScore={handleDispatchDecreaseScore} key={index} /> : <BugItem showingBug={showingBug} handleDispatch={handleDispatch} key={index}/>)}
            </div>
            <button onClick={handleSpeakToTimClick}><Link to="/lab">Speak to Tim</Link></button> 
        </div>
    )
}