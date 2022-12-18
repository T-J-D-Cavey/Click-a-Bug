import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { BugOne } from '../Resources/SVGcomponents/BugOne';
import professorBugy from '../Resources/Images/professorBugy.svg';

export function NotFound() {

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            navigate('lab');
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <BugOne />
            <h1>The bugs are everywhere!!!</h1>
            <img className='professorPic' src={professorBugy} alt='professor'></img>
            <p className='notFoundText intro'>Have anoter go...</p>
            <button><Link to="/">Try again</Link></button>
        </div>
    )
}
