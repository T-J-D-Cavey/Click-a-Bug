import { useSelector} from 'react-redux';
import { scoreSelector } from '../../redux/scoreSlice';

export function Score() {
    const currentScore = useSelector(scoreSelector);

    return (
        <div>{currentScore}</div>
    )
}