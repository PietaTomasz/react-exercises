import React, { Component } from 'react';

class Item extends Component {
    onDelete = () => {
        const { onDelete, name } = this.props;
        onDelete(name);
    }
    render() {
    const { name, description, organizer, location, date, img } = this.props;
    return (
        <div className="eventBox" key={name}>
          <p>{name}</p>
          <p>{description}</p>
          <p>{organizer}</p>
          <p>{location}</p>
          <p>{date}</p>
          <p><img src="{img}" alt="imgage"></img></p>
          <button onClick={this.onDelete}>Delete</button>
        </div>
      )
  }
}

export default Item;
