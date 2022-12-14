import { useSelector } from "react-redux";
import { startGame } from "../../redux/gridSlice";
import { liveGameSelector } from "../../redux/gridSlice";

export function Timer({timer}) {

    const liveGame = useSelector(liveGameSelector);

    return (
        <div>
            {!liveGame? <div>⏰</div> : <div>{timer}</div>}
        </div>
    )
}