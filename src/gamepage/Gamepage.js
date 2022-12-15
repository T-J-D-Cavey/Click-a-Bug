import {Navigation} from './gamepageComponents/Navigation';
import {Outlet} from 'react-router-dom';
import {Timer} from './gamepageComponents/Timer';
import {Score} from './gamepageComponents/Score';
import { LivesLeft } from './gamepageComponents/LivesLeft';


export function Gamepage({countdown}) {

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