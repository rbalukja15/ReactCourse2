import React from 'react';
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function GettingMethodByReference(props) {

    return (
        <div>
            <ButtonGroup>
                <Button
                    color={"primary"}
                    variant={"outlined"}
                    onClick={() => props.handleState(1, 5)}
                >
                    Increase
                </Button>
                <Button
                    color={"primary"}
                    variant={"outlined"}
                    onClick={() => props.handleState(0, 2)}
                >
                    Decrease
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default GettingMethodByReference;
