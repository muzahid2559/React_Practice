import React, {Component} from 'react';
import './App.css';
import Person  from './components/Person';

class App extends Component {
  render() {
    return (
          <div className="App">
            <h1>Hello World!</h1>
            < Person name = "Rahim" age ="30">I am some info of person</Person>
            < Person name = "Karim" age ="20"/>
            < Person name = "Jamal" age ="60"/>
            < Person name = "Sajim" age ="25"/>
          </div>
        );
  }
}


export default App;
