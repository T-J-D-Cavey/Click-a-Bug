import {Route, Routes} from 'react-router-dom';
import {Homepage} from './homepage/Homepage';
import {Gamepage} from './gamepage/Gamepage';
import {StartGame} from './gamepage/gamepageComponents/StartGame';
import {Game} from './gamepage/gamepageComponents/game/Game';
import {NotFound} from './notFound/NotFound';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/lab" element={<Gamepage />}>
        <Route index element={<StartGame />}/>
        <Route path="/lab/game" element={<Game />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
