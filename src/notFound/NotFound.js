import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export function NotFound() {

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            navigate('lab');
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h2>The bugs got you!!!</h2>
            <p className='notFoundText'>Head back to see Tim</p>
            <button><Link to="/">Back to the lab</Link></button>
        </div>
    )
}
