import React, { Component } from 'react';


class CreateDestination extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      country: '',
      price: '',
      description: '',
      difficulty: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleNewDestination(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h3>Create a destination to travel</h3>
          <div className="input-field">
            <label htmlFor="name">name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="country">country</label>
            <input type="text" id="country" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="price">price</label>
            <input type="text" id="price" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="difficulty">difficulty</label>
            <input type="text" id="difficulty" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">description</label>
            <textarea name="description" id="description" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue">Submit</button>
          </div>
        </form>
      </div>
    )
  }




}

export default CreateDestination;