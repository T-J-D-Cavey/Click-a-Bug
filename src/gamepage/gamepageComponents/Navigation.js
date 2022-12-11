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
                    <Link onClick={handleClick}to="/">BACK</Link>
                </li>
            </ul>
        </nav>
    )
}

// Try and replce the content of 'link' with an emojii or SVG of an exit door