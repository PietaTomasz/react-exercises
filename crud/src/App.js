import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import AddEvent from './AddEvent';

const events = [
  {
    name: 'CSS/JS Workshops',
    description: 'Free Workshops for FrontEnd Developers',
    organizer: 'SkyGate',
    location: 'Gliwice',
    date: '18.05.2018',
    img: 'http://wojtekpieta.pl/patrol/patrol/logo.png'
  },
  {
    name: 'React Workshops',
    description: 'Free Workshops for FrontEnd Developers',
    organizer: 'SkyGate',
    location: 'Gliwice',
    date: '13.06.2018',
    img: 'http://wojtekpieta.pl/patrol/patrol/logo.png'
  }
];

localStorage.setItem('events', JSON.stringify(events));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: JSON.parse(localStorage.getItem('events')),
      title: 'React Event Organizer'
    }
  }
  componentWillMount() {
    const events = this.addEvent();
    this.setState({ events });
  }
  
  addEvent = () => {
    return this.state.events;
  }
  onAdd = (name, description, organizer, location, date, img) => {
    const events = this.addEvent();
    events.push({ name, description, organizer, location, date, img });
    this.setState({ events });
  }
  onDelete = (name) => {
    const events = this.addEvent();
    const filtered = events.filter( event => {
      return event.name !== name;
    } )
    console.log(filtered);
    this.setState({
      events: filtered
    });
  }
  render() {
    return (
      <div>
      <h1>Events Manager</h1>
      <AddEvent
      onAdd={this.onAdd}
      />
      { this.state.events.map( event => {
        return (
          <Item
          key={event.name} 
          {...event}
          // name={event.name}
          // description={event.description}
          // organizer={event.organizer}
          // location={event.location}
          // date={event.date}
          // img={event.img}
          />
        )
      } ) }
      </div>
    );
  }
}

export default App;
