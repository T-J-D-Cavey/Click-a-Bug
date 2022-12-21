import { useDispatch } from "react-redux";

import { Server } from "../../../Resources/SVGcomponents/Server";
import { setDidScoreIncrease } from "../../../redux/scoreSlice";

export function BlankItem({handleDispatchDecreaseScore}) {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        handleDispatchDecreaseScore();
        dispatch(setDidScoreIncrease(false));
    }
    return (
        <div >
            <button onClick={handleClick} className='gridItem blankItem'><Server /></button>
        </div>
    )
}
