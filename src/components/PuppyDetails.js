import React, { Component } from 'react';
import '../App.css';

class PuppyDetails extends Component {
  render() {
    let dog = this.props.selectedDog
    let dogRender
      if (dog !== undefined){
         dogRender = <div><h1>{dog.name}</h1>
        <img style={{width:100}} src={dog.image} alt={dog.name}/>
        <p>Breed: {dog.breed}</p>
        <p>isGoodDog? {dog.isGoodDog ? "YASSSS" : "NOPE"}</p> </div>
      } else {
         dogRender = ""
      }
    return (
      <div id="detail-container">
        {dogRender}
      </div>
    )
  }
  }


export default PuppyDetails;
