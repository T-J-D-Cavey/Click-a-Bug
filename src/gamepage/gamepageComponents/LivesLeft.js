import { useSelector } from "react-redux";
import { livesSelector } from "../../redux/scoreSlice";


export function LivesLeft() {
    
    const livesLeft = useSelector(livesSelector);

    // Replace with a Switch/Case: 
    switch(livesLeft) {
        case 5: 
        return (
            <div>
                <span>❤️</span>
                <span>❤️</span>
                <span>❤️</span>
                <span>❤️</span>
                <span>❤️</span>
            </div>
        )
        break;
        case 4:
            return (
            <div>
                <span>❤️</span>
                <span>❤️</span>
                <span>❤️</span>
                <span>❤️</span>
            </div>
            )
        break;
        case 3:
            return (
                <div>
                    <span>❤️</span>
                    <span>❤️</span>
                    <span>❤️</span>
                </div>
            )
        break;
        case 2:
            return (
                <div>
                    <span>❤️</span>
                    <span>❤️</span>
                </div>
            )
        break;
        case 1:
            return (
                <div>
                    <span>❤️</span>
                </div>
            )
        default: return;
    }
}