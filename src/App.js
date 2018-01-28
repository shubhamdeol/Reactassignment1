import React, { Component } from 'react';
import './App.css';
import UserInput from './Userinput/Userinput.js';
import UserOutput from './Useroutput/Useroutput.js';

class App extends Component {
       state = {
         username: "Nitin Choudhary",

       }

       changeUsernameHandler = () => {
          this.setState({
           username: "Nitin Deol",
          });
        }

          inputChangeHandler = (e) => {
            this.setState({
            username: e.target.value,
            });

          }

  render() {
    return (
      <div class="app">
       <UserInput onChange = {this.inputChangeHandler} username={this.state.username}/>
       <UserOutput username="Shubham Deol"  />
       <UserOutput username={this.state.username} onClick = {this.changeUsernameHandler}/>
       <UserOutput />
      </div>
    );
  }
}

export default App;
