import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "RamaKrishna", age: 32},
      {id: 2, name: "Srikanth", age: 29},
      {id: 3, name: "Varun Sai", age: 3}
    ],
    showPersons: false
  }

  // changedNameHandler = (event, id) => {
  //   console.log("in change handler");
  //   const personIndex = this.state.persons.findIndex(val => {
  //     return id === val.id;
  //   });

  //   const person = {...this.state.persons[personIndex]};
  //   person.name = event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[personIndex] = person;

  //   this.setState({
  //     persons: persons
  //   })
  // }

  changedNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    const person = persons[index];
    person.name = event.target.value;
    persons[index] = person;

    this.setState({persons: persons});
  }


  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons : !this.state.showPersons
    })
  }

  render() {

    const styles = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return (
              <Person
                key = {person.id}
                name = {person.name}
                age = {person.age} 
                onclick = {() => this.deletePersonHandler(index)}
                changed = {(event) => this.changedNameHandler(event, index)}/>
            );
          })
        }
      </div> 
      );
    }

    return (
      // React.createElement('div', {className: 'App'}, React.createElement(
      //   'h1', null, 'Hi, I am a react App'
      // ))
      <div className="App">

        <h1>Hi, I am a react App</h1>
        <h4> This is really working</h4>

        <button style={styles} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
