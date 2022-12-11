import { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startGame, endGame} from '../redux/gridSlice';
import {Navigation} from './gamepageComponents/Navigation';
import {Outlet} from 'react-router-dom';
import {Game} from './gamepageComponents/game/Game';
import {StartGame} from './gamepageComponents/StartGame';
import {Timer} from './gamepageComponents/Timer';
import {Score} from './gamepageComponents/Score';
import {LivesLeft} from './gamepageComponents/LivesLeft';
import { liveGameSelector } from '../redux/gridSlice';

export function Gamepage() {
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(9999);
    const timerId = useRef();
    const liveGame = useSelector(liveGameSelector);

    // console.log(countdown)

    if (liveGame && countdown > 300) {
        // console.log(countdown)
        setCountdown(300)        
    }

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current);
            // Need to check if countdown and alert still happen even if game ended or page URL changed
            alert('End game message to be written');
            dispatch(endGame());
            setCountdown(300);
            // need to change page location to previous page
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