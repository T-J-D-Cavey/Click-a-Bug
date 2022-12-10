import {Link} from 'react-router-dom';


export function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Exit the lab</Link>
                </li>
            </ul>
        </nav>
    )
}