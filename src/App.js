import {Route, Routes} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {Homepage} from './homepage/Homepage';
import {Gamepage} from './gamepage/Gamepage';
import {StartGame} from './gamepage/gamepageComponents/StartGame';
import {Game} from './gamepage/gamepageComponents/game/Game';
import {NotFound} from './notFound/NotFound';
import {endGame} from './redux/gridSlice';
import {livesSelector} from './redux/scoreSlice';
import { liveGameSelector } from './redux/gridSlice';
import { resetScore } from './redux/scoreSlice';
import './App.css';

function App() {

    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState('0');
    const timerId = useRef();
    const liveGame = useSelector(liveGameSelector);
    const livesLeft = useSelector(livesSelector);
    const navigate = useNavigate();
  
  // Sets the counter to 300 after the player navigate to the game page
    if (liveGame && countdown === '0') {
      setCountdown(180)        
    }
  
  // Makes the counter reduce by 1 every second: 
    useEffect(() => {
        timerId.current = setInterval(() => {
          if (liveGame) {
            setCountdown(prev => prev - 1)
          }  
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [liveGame])
  // Redirects to page unknown page when timer runs out or all lives are lost, and sets gameLive status to false, cleans up setInterval
    useEffect(() => {
        if (liveGame && countdown <= 0 || liveGame && livesLeft < 1) {
            clearInterval(timerId.current);
            dispatch(endGame());
            setCountdown(180);
            dispatch(resetScore());
            navigate('too-many-bugs-ahhhhhhhhhhhh')
        }
    }, [countdown])
  

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/lab" element={<Gamepage countdown={countdown} />}>
        <Route index element={<StartGame countdown={countdown} setCountdown={setCountdown}/>}/>
        <Route path="/lab/game" element={<Game />}/>
      </Route>
      <Route path="/too-many-bugs-ahhhhhhhhhhhh" element={<NotFound />}/>
      <Route path="/*" element={<Homepage />}/>
    </Routes>
  );
}

export default App;
