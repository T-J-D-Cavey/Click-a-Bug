import {Navigation} from './gamepageComponents/Navigation';
import {Outlet} from 'react-router-dom';
import {Game} from './gamepageComponents/game/Game';
import {StartGame} from './gamepageComponents/StartGame';
import {Timer} from './gamepageComponents/Timer';
import {Score} from './gamepageComponents/Score';
import {LivesLeft} from './gamepageComponents/LivesLeft';

export function Gamepage() {
    return (
        <div className='component-container'>
            <div className="flex">
               <Navigation />
               <Timer />
               <Score />
               <LivesLeft />    
            </div>
            <Outlet />
        </div>
    )
}