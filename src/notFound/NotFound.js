import {Link} from 'react-router-dom';

export function NotFound() {
    return (
        <div>
            <h2>The bugs got you!!!</h2>
            <p className='notFoundText'>Head back to see Tim</p>
            <button><Link to="/">Back to the lab</Link></button>
        </div>
    )
}
