import {Link} from 'react-router-dom';
import professor from '../Resources/Images/professor.svg';
import { BugOne } from '../Resources/SVGcomponents/BugOne';

export function Homepage() {
    return (
        
        <div className='component-container'>
            <BugOne /> 
            <div>
              <h1>Welcome to Click-a-Bug!</h1>
              <button><Link to="/lab">PLAY GAME</Link></button>                
            </div>
            <div>
                <h2>Will you help us clear out the bugs?</h2>
                <div className='div-container'>
                    <img className='professorPic' src={professor} alt='professor'></img>
                    <p className='intro'>Hi there!</p>
                    <p className='intro'>Professor Tim here, I run the computer science lab. 
                        Thanks for helping us fix the bugs in our servers - they're everywhere!</p>
                    <p className='intro'>When you access our servers, you'll need all your software engineer skills to fix these bugs. 
                        Get ready to click when you see any bug.</p>
                    <p className='intro'>You'll only have a few minutes till they destroy everything, so you better be quick! 
                        But watch out, some things shouldn't be clicked!
                        If you cause too much damage we'll need to replace you...
                    </p>
                    <p className='intro'>Come and find me here when you're done, and good luck!</p>
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