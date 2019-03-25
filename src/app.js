import React, { Component, Fragment } from 'react';

let idStatus = 0;
let idBeingEdited;

class App extends Component {
  state = {
    employees: [{id: ++idStatus, name: 'Sam', company: '8om'}, {id: ++idStatus, name: 'Bhandari', company: '8om'}, {id: ++idStatus, name: 'Buck-cat', company: 'Teafloor'}, {id: ++idStatus, name: 'Abhishek', company: 'Teafloor'}, {id: ++idStatus, name: 'Aniket', company: 'Munafa Mart'}, {id: ++idStatus, name: 'Meghna', company: '8om'}]
  }
  
  handleDelete = (target) => {

    // Take this ES6 syntax as universal approach.

    console.log('click', target);
    let newState = this.state.employees.filter(item => item.id !== target);
    this.setState({employees: newState})
  }

  handleAdd = (newEmpName, newEmpComp) => {
    console.log('add-click');
    let newState = this.state.employees;
    newState.push({id: ++idStatus, name: newEmpName, company: newEmpComp});
    this.setState({employees: newState});
  }

  handleEdit = (idToEdit, nameToEdit, compToEdit) => {
    idBeingEdited = idToEdit;
    document.getElementById('edit-name-field').value = nameToEdit;
    document.getElementById('edit-comp-field').value = compToEdit;
  }

  handleUpdate = () => {
    console.log('update');
    let newState = this.state.employees.filter(item => item.id !== idBeingEdited);
    newState.push({id: idBeingEdited, name: document.getElementById('edit-name-field').value, company: document.getElementById('edit-comp-field').value});
    this.setState({employees: newState});
  }

  render() {
    return (
      <Fragment>
        <h1>Employees</h1>
        <ul>{ this.state.employees.map(item => (
            <Fragment key = {item.id}>
              <li>{item.name + ": " + item.company}</li>
              <button onClick={() => this.handleDelete(item.id)}>Delete</button>
              <button onClick={() => this.handleEdit(item.id, item.name, item.company)}>Edit</button>

              {/* In above statement, () => is required. Because in ES6, a function name followed by a parenthesis will automatically call the function (script will run before page renders), so adding it will prevent that */}
              {/* Take this ES6 syntax as universal approach. */}
            
              </Fragment>
        ))}</ul>
        <form>
          <input type="text" id="new-emp-name" placeholder="New employee name" />
          <input type="text" id="new-emp-comp" placeholder="New employee company" />
          <input type="button" value="Add new employee" onClick={() => this.handleAdd(document.getElementById('new-emp-name').value, document.getElementById('new-emp-comp').value)} />
        </form>
        <form>
          <input type="text" id="edit-name-field" placeholder="Employee name to edit" />
          <input type="text" id="edit-comp-field" placeholder="Employee co. to edit" />
          <input type="button" value="Update details" onClick={() => this.handleUpdate(document.getElementById('edit-name-field').value, document.getElementById('edit-comp-field').value)} />
        </form>
      </Fragment>
    )
  }
}

export default App;