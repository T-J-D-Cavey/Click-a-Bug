import {Link} from 'react-router-dom';
import professor from '../Resources/Images/professor.svg';
import { BugOne } from '../Resources/SVGcomponents/BugOne';
import {BugTwo} from '../Resources/SVGcomponents/BugTwo';
import bug4 from '../Resources/Images/bug4.svg'

export function Homepage() {
    return (
        
        <div className='component-container'>
            <BugOne /> 
            <BugTwo /> 
            <div>
              <h1>Click-a-Bug!</h1>
              <button><Link to="/lab">PLAY GAME</Link></button>                
            </div>
            <div>
                <h2>Help the professor fix these computer bugs before it's too late...</h2>
                <div className='div-container'>
                    <img className='professorPic appear' src={professor} alt='professor'></img>
                    <p className='intro'>Hi there!</p>
                    <p className='intro'>I'm Professor Tim. 
                        Thanks for helping us fix the bugs in our servers - they're everywhere!</p>
                    <p className='intro'>You're going to need all your software engineer skills to fix these bugs. 
                        Get ready to click whenever you see a bug.</p>
                    <p className='explainer'>Explainer: Look out for bugs like this, of different colors and shapes: <br/>
                    <img className='homepageBug' src={bug4} alt='bug'></img></p>
                    <p className='intro'>You'll only have a few minutes until they destroy everything, so you better be quick!</p>
                    <p className='explainer'>Explainer: you have up to 3 minutes to score 1000 points to win!</p> 
                        <p className='intro'>But watch out, some things shouldn't be clicked!
                        If you cause too much damage we'll need to replace you...
                    </p>
                    <p className='explainer'>Explainer: You start with 5 lives and lose a life each time you click on a wrong item, such as computer hardware, files and folders. 
                    <br/><div className='hearts'>❤️❤️❤️❤️❤️</div></p>
                    <p className='intro'>Come and find me here when you're done, and good luck!</p>
                </div>
                <div>
                    <button><Link to="/lab">PLAY GAME</Link></button>
                </div>  
            </div>
            <div>
                <footer>
                   <p id='footer'>See the <a href='https://github.com/T-J-D-Cavey' target='_blank'>creator's Github page here</a>.</p>
                </footer>
            </div>

        </div>

    )
}
