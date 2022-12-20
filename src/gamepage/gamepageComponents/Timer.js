import { useSelector } from "react-redux";
import { liveGameSelector } from "../../redux/gridSlice";

export function Timer({timer}) {

    const liveGame = useSelector(liveGameSelector);
    
//     From remote: added 'metric' className:
    return (
        <div>
            {!liveGame? <div>⏰</div> : <div className='metric'>{timer}</div>}
        </div>
    )
}
