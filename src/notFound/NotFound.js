import {Link} from 'react-router-dom';

export function NotFound() {
    return (
        <div>
            <h3>Page not found</h3>
            <button><Link to="/">Go back</Link></button>
        </div>
    )
}

// I need to add some logic which accesds the user's browser history and populates the URL with the URL before the current one