import React, { Component } from 'react';
import {Button, ButtonGroup} from "@material-ui/core";

class FirstClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 20,
            address: "Tirana",
            count: 0
        }
    }

    handleStateChange = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleStateReset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        const { children } = this.props;
        const { age, address, count } = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <ButtonGroup>
                    <Button variant={"contained"}
                            color={"primary"}
                            onClick={this.handleStateChange}
                    >
                        Click to change count
                    </Button>
                    <Button variant={"contained"}
                            color={"secondary"}
                            onClick={this.handleStateReset}
                    >
                        Reset
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default FirstClassComponent;
