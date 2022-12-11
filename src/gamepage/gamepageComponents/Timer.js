import { useSelector } from "react-redux";
import { startGame } from "../../redux/gridSlice";
import { liveGameSelector } from "../../redux/gridSlice";

export function Timer({timer}) {

    const liveGame = useSelector(liveGameSelector);

    return (
        <div>
            {!liveGame? <div>Countdown to show here!</div> : <div>Countdown: {timer}</div>}
        </div>
    )
}

// we have a live game state to use to start and stop the timer, each are an action, and another action is resetTimer which will be triggered when playgame button is clicked in StartGame