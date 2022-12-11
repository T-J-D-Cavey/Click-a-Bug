import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, endGame } from "../../redux/gridSlice";
import { decrementTimer, timeSelector } from "../../redux/timerSlice";

// remove the {timer} prop from Timer function below:
export function Timer() {

    const dispatch = useDispatch();
    // const [countdown, setCountdown] = useState(300);
    const timerId = useRef();
    const timerSlicetime = useSelector(timeSelector);

    useEffect(() => {
        timerId.current = setInterval(() => {
            timerSlicetime - 1
            dispatch(decrementTimer(countdown))

        }, 1000)
        return () => clearInterval(timerId.current)
    }, [startGame])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current);
            alert('End game message to be written');
            dispatch(endGame());
            setCountdown(300);
            // need to change page location to previous page
        }
    }, [timerSlicetime])


    return (
        // <div>tbc</div>
        <div>{timerSlicetime}</div>
    )
}

// we have a live game state to use to start and stop the timer, each are an action, and another action is resetTimer which will be triggered when playgame button is clicked in StartGame