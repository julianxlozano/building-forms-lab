// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_BAND', payload: this.state });
    this.setState({
      text: '',
    })
  };


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add band</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
      </div>
    )
  }
}

export default connect()(BandInput); 
