import {Route, Routes} from 'react-router-dom';

import {Homepage} from './homepage/Homepage';
import {Gamepage} from './gamepage/Gamepage';
import {StartGame} from './gamepage/gamepageComponents/StartGame';
import {Game} from './gamepage/gamepageComponents/game/Game';
import {NotFound} from './notFound/NotFound';
import './App.css';



import { useState, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {endGame} from './redux/gridSlice';
import {livesSelector} from './redux/scoreSlice';
import { liveGameSelector } from './redux/gridSlice';
import { resetScore } from './redux/scoreSlice';









function App() {

    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState('0');
    const timerId = useRef();
    const liveGame = useSelector(liveGameSelector);
    const livesLeft = useSelector(livesSelector);
    const navigate = useNavigate();
  
  // Sets the counter to 300 after the player navigate to the game page
    if (liveGame && countdown === '0') {
      setCountdown(120)        
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
        if (countdown <= 0 || livesLeft < 1) {
            clearInterval(timerId.current);
            dispatch(endGame());
            setCountdown(300);
            dispatch(resetScore());
            navigate('too-many-bugs-ahhhhhhhhhhhh')
  // Here is where we should add the useNavigate hook inside a setInterval function, to redirect to the start page after 2 seconds
  // We should also create another IF which says if score is over 1000 and the timer runs out, don't send them to that 'too-many-bugs' page but to the start page with completed set to true
        }
    }, [countdown])
  
  // Here might be where we add an IF statement that if the score is >1000, generate an alert. 
  // We need to import the score selector and place it in another useEffect to run with the change to score state







  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/lab" element={<Gamepage countdown={countdown} />}>
        <Route index element={<StartGame countdown={countdown} setCountdown={setCountdown}/>}/>
        <Route path="/lab/game" element={<Game />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
