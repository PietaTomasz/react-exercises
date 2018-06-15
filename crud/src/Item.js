import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }
    onDelete = () => {
        const { onDelete, name } = this.props;
        onDelete(name);
    }
    onEdit = () => {
        this.setState({ isEdit: true  })
    }
    onEditSubmit = (event) => {
        event.preventDefault();
    }
    render() {
    const { name, description, organizer, location, date, img } = this.props;
    return (
        <div className="eventBox">
        {
            this.state.isEdit ?
            (
                <form onSubmit={this.onEditSubmit}>
                <input placeholder="name"
             ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="description"
            ref={descriptionInput => this.descriptionInput =
            descriptionInput} />
            <input placeholder="organizer"
            ref={organizerInput => this.organizerInput = 
            organizerInput} />
            <input placeholder="location"
            ref={locationInput => this.locationInput = 
            locationInput} />
            <input placeholder="date"
            ref={dateInput => this.dateInput = dateInput} />
            <input placeholder="img"
            ref={imgInput => this.imgInput = imgInput} /><hr/>
            <button> Save</button>
                </form>
            )
            : (<div>
          <p>{name}</p>
          <p>{description}</p>
          <p>{organizer}</p>
          <p>{location}</p>
          <p>{date}</p>
          <p><img src="{img}" alt="imgage"></img></p>
          
          <button onClick={this.onDelete}>Delete</button>
          <button onClick={this.onEdit}>Edit</button>
            </div>)
        }
          
        </div>
      )
  }
}

export default Item;
