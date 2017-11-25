/* 

11/24/2017
Based off of the create-react-app, this is my 
app for the day. 

It's called 5...

What we will try to do 3 bars taking up the full screen equally. RedYellowBlue.

That's all...


1-- start by deleting everything in src/app.js
    By everything, what I really mean is 
    Everything inside the return statement.
    then i replace it with...
2-- i make a div with an unordered list and 
    3 list items. the div gets it's own id
    and it's own style in app.css
3-- the sizing of the boxes should not be based
    off of how many list items I have made..
    The list items are rediculous...
    What I really need are the three divs to 
    behave responsively. 

There is a codepen by bradfrost called smpte color bars using flexbox that I will dig into next to help me fill the screen entirely.       


Here is my return statement on app.js
 <div id="myWrapper">
     <div id="myDiv">
     <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li></ul>
     </div>

     <div id="myDiv2">
     <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li></ul>
     </div>

     <div id="myDiv3">
     <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li></ul>
     </div>

     </div>
     
     And here is the css I added ...
     #myWrapper {
  display: flex;
  flex-flow: column;
  flex:1;
}

#myDiv {
  background-color: red;
}

#myDiv2 {
  background-color: yellow;
  
}

#myDiv3 {
  background-color: blue;
  
}
*/
