export function BugItem({handleDispatch}) {
    const handleClick = (e) => {
        e.preventDefault()
        handleDispatch()
    }

    return (
        <div className='grid-item'>
            <button className='bugItem' onClick={handleClick}>BUG Picture!</button>
        </div>
    )
}