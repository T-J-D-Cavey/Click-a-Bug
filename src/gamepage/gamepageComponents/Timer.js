import { useSelector } from "react-redux";
import { liveGameSelector } from "../../redux/gridSlice";

export function Timer({timer}) {

    const liveGame = useSelector(liveGameSelector);

    if (!liveGame) {
        return (
            <div>
              <div>⏰</div>  
            </div> 
        )
    } 
    else if (timer < 60) {
        return (
            <div>
              <div className='metric red'>{timer}</div>  
            </div> 
        )
    }   return (
            <div>
                <div className='metric'>{timer}</div>
            </div>
    )
}
