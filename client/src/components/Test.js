import React from 'react';

function Test(props) {
    return (
      <div>
          <h1>Test Component {props.name} </h1>
          <button onClick={() => props.handleNameChange("name")}>Click to change name</button>
          <p>The first test component</p>
      </div>
    );
}

export default Test;
