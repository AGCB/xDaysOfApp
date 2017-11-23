/* 
  inspired by...
  Teddy Liu's CS50  Introduction to React.
  
  this code gets copy and pasted as app.js after the terminal commands:
     create-react-app appname
     cd appname
     npm start or yarn start
     open browser to correct port
     
  The end result is a button that displays a number. The number increments everytime
  the button is clicked.
  
  
*/
import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor() {
  super();
  this.state = {
    count: 0
  }
 }

 increment = () => {
  this.setState({count: this.state.count + 1});
 }

 render() {
  return (
      <div>
   
    
     
        <button onClick={this.increment}>IncrementHere</button>
        {this.state.count}
        {console.log(42)}
      
      </div>
    )
 }
}

export default App;

    // i was tripped up for a few minutes with the onclick.
    //     remember checking for case sensitivity!
    //     camelcase in this "case".
    //     I caught the bug because devTools gave me a warning....
    //     Warning: Invalid event handler property `onclick`. Did you mean `onClick`?

    //     Why thank you for such a helpful error message!!

    //     Also, once it is correct, sublime's text highlighting
    //     makes it more obvious. 


/* 
  This also led to me checking out firefox's react devTools
  add-on.  
  https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

  A pop up comes up warning me that react dev tools requires 
  --access my data for all websites..
  geez.. kind of invasive!

  It added a new clickable button in the top of the browser window.
  the button lights up if it detects a react app.
    this feature works fine with my create-react-app projects.

  Now along with the standard devTools tabs, we have react at the end.
  one obvious benefit right away is that I can instantly change state
  and the app updates automatically and i still have functionality 
  within the page.. sweet.


  At this point we have a basic button that, when clicked, will update
  some state we have..

  It's not impressive, but it points to something react is giving us. 
  We are working on a different level than might otherwise be seen
  with vanilla JS. We aren't working on the dom directly. 
  All we care about as developers is updating state.

  The VirtualDOM Doom3 trick...
    Interestingly, there is an idea here similar to a hack that 
    iDSoftware engineers dealt with when making the videoGame Doom3.
    Make a new DOM and do a difference pass to see what has changed. 
    Then only update the changes necessary.

  At this point we are only at 13:00 on Teddy's youtube.
*/
