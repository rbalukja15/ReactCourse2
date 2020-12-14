import React from 'react';
import {Button} from "@material-ui/core";

class MethodBinding extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: "Mario" };
    }

    handleNameChange = () => {
        this.setState({
            name: "Name Changed"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <Button color={"primary"} onClick={this.handleNameChange}>Change name</Button>
            </div>
        );
    }
}

export default MethodBinding;
