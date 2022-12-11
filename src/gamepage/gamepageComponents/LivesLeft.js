import { useDispatch, useSelector } from "react-redux";
import { livesSelector, loseALife } from "../../redux/scoreSlice";


export function LivesLeft() {
    
    const dispatch = useDispatch();
    const livesLeft = useSelector(livesSelector);
    let i;

    return (
        <div>
            {livesLeft}
        </div>
    )
}

// I need to find and add svg emoji icons and find a way to visualise the numbers using them, to symbolise lives