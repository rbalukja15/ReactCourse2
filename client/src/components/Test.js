import React from 'react';
import PropTypes from 'prop-types';

function Test(props) {
    return (
      <div>
          <h1>{props.name}</h1>
          <p>{props.surname}</p>
          <p>{props.age}</p>
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
