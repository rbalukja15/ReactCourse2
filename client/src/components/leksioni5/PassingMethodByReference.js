import React, {useState} from 'react';
import GettingMethodByReference from "./GettingMethodByReference";

function PassingMethodByReference() {
    const [count, setCount] = useState(0);

    const handleStateChange = (type, value) => {
        if (type)
            setCount(prevState => prevState + value);
        else setCount(prevState => prevState - value);
    }

    return (
        <div>
            <p>{count}</p>
            <GettingMethodByReference handleState={handleStateChange} />
        </div>
    );
}

export default PassingMethodByReference;
