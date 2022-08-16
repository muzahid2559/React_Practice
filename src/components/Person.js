import React from 'react';

let Person = (props) => {
  return (
    <div>

      <h1> Number : {Math.random()}</h1>
      <h3> Name : {props.name} and Age : {props.age}</h3>
      <h4> Exta Info : {props.children}</h4>

    </div>
  );
}

  export default Person;