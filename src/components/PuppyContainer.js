import React, { Component } from 'react'
import '../App.css';

import Puppy from './Puppy';

class PuppyContainer extends Component {


  render() {
    // console.log("inside container", this.props)
    return (
      <div id="puppy-container">
        <h1>PUPPIES!!!</h1>
        {this.props.dogs.map((d) =>{
          return <Puppy name={d.name} details={d.details} key={d.id} id={d.id} isGoodDog={d.isGoodDog} handleClickDog={this.props.handleClickDog} handleGDClick={this.props.handleGDClick}/>
        })}
      </div>
    )
  }
}

export default PuppyContainer
