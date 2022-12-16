import { Server } from "../../../Resources/SVGcomponents/Server";

export function BlankItem({handleDispatchDecreaseScore}) {

    const handleClick = (e) => {
        e.preventDefault();
        handleDispatchDecreaseScore();
    }
    return (
        <div >
            <button onClick={handleClick} className='gridItem blankItem'><Server /></button>
        </div>
    )
}
