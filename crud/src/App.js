import React, { Component } from 'react';
import './App.css';

const events = [
  {
    name: 'CSS/JS Workshops',
    description: 'Free Workshops for FrontEnd Developers',
    organizer: 'SkyGate',
    location: 'Gliwice',
    date: '18.05.2018',
    img: 'http://wojtekpieta.pl/patrol/patrol/logo.png'
  }
];

localStorage.setItem('events', JSON.stringify(events));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      title: 'React Event Organizer'
    }
  }
  componentWillMount() {
    const events = JSON.parse(localStorage.getItem('events'));
    this.setState({ events });
  }
  
  addEvent = (ev) => {
    ev.preventDefault();
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let event = { name, completed };
    let events = this.state.events;
    events.push(event);
    this.setState({ events: event });
    this.refs.eventForm.reset();
  }
  render() {
    let title = this.state.title;
    return (
      <div>
      <h1>{title}</h1>
      <form ref="eventForm">
        <input type="text" ref="name" placeholder="add event" />
        <input type="text" ref="completed" placeholder="is it done?" />
        <button onClick={this.addEvent}>Add Event</button>
      </form>
      <p>Event name: {this.state.events[0].name}</p>
      <h2>Events Manager</h2>
      { this.state.events.map( event => {
        return (
          <div className="eventBox" key={event.name}>
            <p>{event.name}</p>
            <p>{event.description}</p>
            <p>{event.organizer}</p>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <p>{event.img}</p>
          </div>
        )
      } ) }
      </div>
    );
  }
}

export default App;
