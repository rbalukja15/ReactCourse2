import React, { Component } from 'react';

class FirstClassComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, data: { details: { age, address } } } = this.props;
        return (
            <div>
                {children}
                <div>
                    {age}
                    {address}
                </div>
            </div>
        );
    }
}

export default FirstClassComponent;
