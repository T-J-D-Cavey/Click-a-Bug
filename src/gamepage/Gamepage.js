import {Navigation} from './gamepageComponents/Navigation';
import {Outlet} from 'react-router-dom';
import {Game} from './gamepageComponents/Game';
import {StartGame} from './gamepageComponents/StartGame';

export function Gamepage() {
    return (
        <div className='component-container'>
            <Navigation />
            {/* I will need to add the Timer, Score  and LivesLeft componants here */}
            <Outlet />
        </div>
    )
}