import {Link} from 'react-router-dom';

export function Homepage() {
    return (
        <div className='component-container'>
            <div>
              <h1>Title</h1>
              <button><Link to="/lab">Play Game</Link></button>                
            </div>
            <div>
                <h2>Hi there!</h2>
                <div>
                    <p>Intro paragraph to set the scene.</p>
                    {/* <img>Show a pic of a bug square</img> */}
                    <p>Explain the rules</p>
                    <p>Intro to the score factor</p>
                </div>
            </div>
            <div>
                <footer>
                    <p>To be replaced by a React Router LINK</p>
                </footer>
            </div>

        </div>

    )
}