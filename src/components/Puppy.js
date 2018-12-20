import React, { Component } from 'react'

class Puppy extends Component {
  // <div>puppy info</div>
  render() {
    return (
      <div>
        <div onClick={()=>this.props.handleClickDog(this.props.id)}>{this.props.name}</div>
        <button onClick={()=> this.props.handleGDClick(this.props.id)}>{ this.props.isGoodDog ? "such a good dog" : "BAD DOG"}</button>
      </div>
    )
  }
}

export default Puppy;
