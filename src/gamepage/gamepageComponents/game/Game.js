import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {BlankItem} from './BlankItem';
import {BugItem} from './BugItem';
import {randomIndexSelector, setRandomIndex} from '../../../redux/gridSlice';

export function Game() {
    const dispatch = useDispatch();
    // Look for a better way to generate this array with a method:
    const gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let randomIndex = useSelector(randomIndexSelector);

    const createRandomIndex = () => {
        let n;
        n = Math.floor(Math.random() * 16);
        return n;
    }

    const handleDispatch = () => {
        let n = createRandomIndex();        
        dispatch(setRandomIndex(n));
    }

    return (
        <div>
            <div className='grid-container'>      
               {gridArray.map((element, index) => element !== randomIndex ? <BlankItem key={index} /> : <BugItem handleDispatch={handleDispatch} key={index}/>)}
            </div>
            <button><Link to="/lab">Play Again</Link></button> 
        </div>
    )
}