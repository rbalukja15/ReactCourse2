import React, { Component } from 'react';
import {Button, ButtonGroup} from "@material-ui/core";

class ComponentLifecycle extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 0,
        name: 'Mario',
    }

    componentDidMount() {
        this.setState({
            name: "Name changed"
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("props changed");
        if (prevState !== this.state) {
            console.log("props changed");
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
        const { name, count } = this.state;
        return (
            <div>
                <h1>{name}</h1>
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

export default ComponentLifecycle;
