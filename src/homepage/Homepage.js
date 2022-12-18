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
                    <p>Hi there!</p>
                    <p>Professor Tim here, I run the computer science lab. 
                        Thanks for helping us get rid of the computer bugs we have - they're everywhere!</p>
                    <p>When you enter the servers room, you'll need all your software engineer skills to stop these bugs. 
                        Get ready to click when you see any bug.</p>
                    <p>You'll only have a few minutes in there till they overpower you, so you better be quick! 
                        But watch out, some things in there aren't bugs and shouldn't be clicked!
                        If you cause too much damage in there we'll need to find someone else...
                    </p>
                    <p>Come out and find me here when you're done, and good luck!</p>
                </div>
            </div>
            <div>
                <footer>
                   <p>See the <a href='https://github.com/T-J-D-Cavey' target='_blank'>creator's Github page here</a>.</p>
                </footer>
            </div>

        </div>

    )
}