import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { BugOne } from '../Resources/SVGcomponents/BugOne';
import professorBugy from '../Resources/Images/professorBugy.svg';

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
            <BugOne />
            <h1>The bugs are everywhere!!!</h1>
            <img className='professorPic' src={professorBugy} alt='professor'></img>
            <p className='notFoundText'>Head back to see Tim</p>
            <button><Link to="/">Back to the lab</Link></button>
        </div>
    )
}
