import { useDispatch, useSelector } from "react-redux";
import { livesSelector} from "../../redux/scoreSlice";


export function LivesLeft() {
    
    const dispatch = useDispatch();
    const livesLeft = useSelector(livesSelector);

    // Replace with a Switch/Case: 
    if (livesLeft === 5) {
        return (
            <div>
                <span>☕</span>
                <span>☕</span>
                <span>☕</span>
                <span>☕</span>
                <span>☕</span>
            </div>
        )} else if (livesLeft === 4) {
        return (
            <div>
                <span>☕</span>
                <span>☕</span>
                <span>☕</span>
                <span>☕</span>
            </div>
        )} else if (livesLeft === 3) {
            return (
                <div>
                    <span>☕</span>
                    <span>☕</span>
                    <span>☕</span>
                </div>
            )} else if (livesLeft === 2) {
                return (
                    <div>
                        <span>☕</span>
                        <span>☕</span>
                    </div>
                )} else if (livesLeft === 1) {
                    return (
                        <div>
                            <span>☕</span>
                        </div>
                    )} else return;
}