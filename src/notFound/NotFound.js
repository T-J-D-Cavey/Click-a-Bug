import {Link} from 'react-router-dom';

export function NotFound() {
    return (
        <div>
            <h2>The bugs got you!!!</h2>
            <p>Head back to see Tim</p>
            <button><Link to="/">Back to the lab</Link></button>
        </div>
    )
}

// I need to add some logic which accesds the user's browser history and populates the URL with the URL before the current one