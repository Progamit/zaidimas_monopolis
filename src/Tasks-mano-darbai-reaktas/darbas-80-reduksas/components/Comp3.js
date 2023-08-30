import {useRef} from 'react';
import {useDispatch} from "react-redux";
import {updateText} from "../features/colors.js";


const Comp3 = () => {
    const ref = useRef()
    const dispatch = useDispatch()

    function setText() {
        dispatch(updateText(ref.current.value))
    }

    return (
        <div className="colorBox d-flex flex-column">
            <input type="text" ref={ref} placeholder="Write text"/>
            <button onClick={setText}>Set Text</button>
        </div>
    );
};

export default Comp3;
