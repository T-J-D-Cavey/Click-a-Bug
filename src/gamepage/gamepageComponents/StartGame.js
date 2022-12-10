import {Link} from 'react-router-dom';

export function StartGame() {
    return (
      <div>
         <h1>Welcome to the lab...</h1>
         <button><Link to="/lab/game">Play Game</Link></button>                
      </div>
    )
}