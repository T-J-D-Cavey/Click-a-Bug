import {Link} from 'react-router-dom';


export function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Back to Tim's Office</Link>
                </li>
            </ul>
        </nav>
    )
}