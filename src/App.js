import React, { Component } from 'react';
// import logo from './logo.svg';
import Filter from './components/Filter';
import PuppyContainer from './components/PuppyContainer';
import PuppyDetails from './components/PuppyDetails';
import './App.css';

class App extends Component {
  state={
    dogs: [],
    clickedDogId: null,
    searched: "",
    goodDogs: false
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pups`)
    .then(r=> r.json())
    .then(dogData=> this.setState({dogs: dogData}))
  }

  handleClickDog = (id) =>{
    this.setState({clickedDogId: id}
    )
  }

  findDog = () => {
    return this.state.dogs.find((d) =>{
     return d.id === this.state.clickedDogId
    })
  }

  handleChange=(e)=>{
    this.setState({searched: e.target.value})
    // console.log(this.state.searched);
  }

  filterDog = () => {

    let inputFilter = this.state.dogs.filter((d) => {
      return d.name.toLowerCase().includes((this.state.searched.toLowerCase())) || d.breed.toLowerCase().includes((this.state.searched.toLowerCase()))
    })

    if(this.state.goodDogs) {
      return inputFilter.filter((d) => {
        return d.isGoodDog
      })
    } else {
      return inputFilter
    }
  }

  handleGBChecked = (e) =>{
    if (e.target.checked){
      this.setState({goodDogs: true})
    } else {
      this.setState({goodDogs: false})

    }
  }

  handleGDClick = (id) => {
    let updatedDog = this.state.dogs.map ((e) =>{
      if (e.id === id) {
        return {...e, isGoodDog: !e.isGoodDog}
      } else {
        return e
      }
    })
    this.setState({dogs: updatedDog})
  }

  render() {
    // const dogs = this.state.dogs
    return (
      <div>
        <h1 id="header">Puppy DB</h1>
        <Filter handleChange={this.handleChange} searched={this.state.searched} handleGBChecked={this.handleGBChecked}/>
        <div id="app-container">
          <PuppyContainer dogs={this.filterDog()} handleClickDog={this.handleClickDog} handleGDClick={this.handleGDClick}/>
          <PuppyDetails selectedDog={this.findDog()}/>
        </div>
      </div>
    );
  }
}

export default App;
