import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from "@material-ui/core";

function Test(props) {
    const [count, setCount] = useState(0);

    const handleStateChange = (countState) => {
        setCount(countState);
    }

    const handleStateReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <ButtonGroup>
                <Button variant={"contained"}
                        color={"primary"}
                        onClick={() => handleStateChange(10)}
                >
                    Click to change count
                </Button>
                <Button variant={"contained"}
                        color={"secondary"}
                        onClick={handleStateReset}
                >
                    Reset
                </Button>
            </ButtonGroup>
        </div>
    );
}

Test.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    age: PropTypes.number
}

Test.defaultProps = {
    name: "Default",
    surname: "Default Surname",
    age: 21
}

export default Test;
