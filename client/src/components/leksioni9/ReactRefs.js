import React from 'react';
import {Button} from "@material-ui/core";

function RefExample(props) {
    const inputRef = React.createRef();

    const focusTextInput = () => {
        inputRef.current.click();
    }

    return (
        <>
            <input type="file" accept="file" ref={inputRef} style={{ minWidth: '25px', display: 'none' }}/>
            <Button variant={"contained"} color={"primary"} onClick={focusTextInput}>Focus ref</Button>
        </>
    );
}

export default RefExample;
