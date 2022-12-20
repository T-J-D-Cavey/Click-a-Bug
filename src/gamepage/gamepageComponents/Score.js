import { useSelector} from 'react-redux';
import { scoreSelector } from '../../redux/scoreSlice';

export function Score() {
    const currentScore = useSelector(scoreSelector);
    
//     From remote: added the 'metric' className:
    return (
        <div className='metric' >{currentScore}</div>
    )
}
