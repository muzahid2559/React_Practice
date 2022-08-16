import React ,{Component} from 'react';


//Dynamic Function Component

// let Person = (props) => {
//   return (
//     <div>

//       <h1> Number : {Math.random()}</h1>
//       <h3> Name : {props.name} and Age : {props.age}</h3>
//       <h4> Exta Info : {props.children}</h4>

//     </div>
//   );
// }



//Dynamic Class Component

class Person extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
  
        <h1> Number : {Math.random()}</h1>
        <h3> Name : {this.props.name} and Age : {this.props.age}</h3>
        <h4> Exta Info : {this.props.children}</h4>
  
      </div>
    );
  }
}

  export default Person;