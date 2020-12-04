import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Test(props) {
    const [count, setCount] = useState(0);

    return (
      <div>
          <h1>{props.name}</h1>
          <p>{props.surname}</p>
          <p>{props.age}</p>
          <h1>{count}</h1>
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
