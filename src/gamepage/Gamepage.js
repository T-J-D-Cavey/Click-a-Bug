import { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {endGame} from '../redux/gridSlice';
import {Navigation} from './gamepageComponents/Navigation';
import {Outlet} from 'react-router-dom';
import {Timer} from './gamepageComponents/Timer';
import {Score} from './gamepageComponents/Score';
import { LivesLeft } from './gamepageComponents/LivesLeft';
import {livesSelector} from '../redux/scoreSlice';
import { liveGameSelector } from '../redux/gridSlice';
import { resetScore } from '../redux/scoreSlice';

export function Gamepage() {
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(9999);
    const timerId = useRef();
    const liveGame = useSelector(liveGameSelector);
    const livesLeft = useSelector(livesSelector);
    const navigate = useNavigate();

// Sets the counter to 300 after the player navigate to the game page
    if (liveGame && countdown > 300) {
        setCountdown(300)        
    }
// Makes the counter reduce by 1 every second: 
    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])
// Redirects to page unknown page when timer runs out or all lives are lost, and sets gameLive status to false, cleans up setInterval
    useEffect(() => {
        if (countdown <= 0 || livesLeft < 1) {
            clearInterval(timerId.current);
            dispatch(endGame());
            setCountdown(300);
            dispatch(resetScore());
            navigate('too-many-bugs-ahhhhhhhhhhhh')
        }
    }, [countdown])

    return (
        <div className='component-container'>
            <div className="flex">
               <Navigation />
               <Timer timer={countdown} />
               <Score />
               <LivesLeft />    
            </div>
            <Outlet />
        </div>
    )
}