/* 
  inspired by...
  Decypher Media's Introduction to React.
  He made a ticTacToe game in vanillaJS just to show the frustrations with working directly on the DOM
  and give context when answering the question, "what problem does a framework like react solve?"
  
  this code gets copy and pasted as app.js after the terminal commands:
     create-react-app appname
     cd appname
     npm start or yarn start
     open browser to correct port
     
  The end result is a homepage with a title that has an onclick event of adding "!" to itself.
  
  
*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* 
  
*/
class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    message: 'Hello, World'
  }
}




/* 
  Every component has a lifecycle of multiple stages you can use to inject code.
  from birth to death is...
  1-Will Mount
  2-Did Mount
  3-Will Receive Props
  4-Should Update
  5-Render
  6-Did Update
  7-Will Unmount
  you could have set the state with setState() using componentWillMount
  
  componentWillMount() {
  this.setState({
    message: 'Hello, World'
  })
}
*/




/* 
every component needs a render() {}
return (put in jsx here)
it 
*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          //now it gets interesting...
          <h1 onClick = {() => 
            this.setState({message: this.state.message + 
            '!'})}>{this.state.message}</h1>
            
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
