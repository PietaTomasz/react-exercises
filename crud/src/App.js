import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      title: 'React Event Organizer'
    }
  }
  addEvent = (event) => {
    event.preventDefault();
    console.log
  }
  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <form>
        <input type="text" ref="name" placeholder="add event" />
        <input type="text" ref="completed" placeholder="is it done?" />
        <button onClick={this.addEvent}>Add Event</button>
      </form>
      </div>
    );
  }
}

export default App;
