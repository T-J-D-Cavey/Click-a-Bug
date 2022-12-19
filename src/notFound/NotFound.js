import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { BugOne } from '../Resources/SVGcomponents/BugOne';
import professorBugy from '../Resources/Images/professorBugy.svg';

export function NotFound() {

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            navigate('/');
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <BugOne />
            <h1>The bugs are everywhere!!!</h1>
            <img className='professorPic appear' src={professorBugy} alt='professor'></img>
            <p className='notFoundText intro'>Run away. Save yourself!</p>
            <button><Link to="/">Exit</Link></button>
        </div>
    )
}
