import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { endGame } from '../../redux/gridSlice';

export function Navigation() {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(endGame());
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link onClick={handleClick}to="/">Exit the lab</Link>
                </li>
            </ul>
        </nav>
    )
}