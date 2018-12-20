import React, { Component } from 'react';
import '../App.css';

class Filter extends Component {
  render() {
    return (
      <div style={{margin: "auto", width: "450px"}}>
        <input
          onChange={(e)=>this.props.handleChange(e)}
          type="text"
          placeholder="search by name and/or breed"
          style={{width: "250px"}}
          value={this.props.searched}
        />
        Good boiz only
        <input
          type="checkbox" onChange={(e)=> this.props.handleGBChecked(e)}
        />
      </div>
    )
  }
}

export default Filter;
