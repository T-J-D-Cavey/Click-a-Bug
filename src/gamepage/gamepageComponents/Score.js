import { useSelector} from 'react-redux';
import { scoreSelector, didScoreIncreaseSelector } from '../../redux/scoreSlice';

export function Score() {
    const currentScore = useSelector(scoreSelector);
    const scoreIncreased = useSelector(didScoreIncreaseSelector);
    
    if (scoreIncreased) {
       return (
           <div className='metric green' >{currentScore}</div>
       )        
    } return (
        <div className='metric red' >{currentScore}</div>
    )

}
