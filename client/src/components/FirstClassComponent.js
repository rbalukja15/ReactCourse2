import React, { Component } from 'react';

class FirstClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: 'React Course' };
    }

    changeName = (name) => {
        this.setState({ name })
    }

    render() {
        return (
            <div>
                {/*<h1>State:  {this.state.name}</h1>*/}
                <h1>Prop:  {this.props.nameKey}</h1>
                {/*<p>First class based component</p>*/}
                {/*<button onClick={() => this.changeName("React Test")}>Click to change name</button>*/}
            </div>
        );
    }
}

export default FirstClassComponent;
