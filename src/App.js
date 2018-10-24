import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: "a", name: "nands", age: 10 },
        { id: "b", name: "mary", age: 10 },
        { id: "c", name: "jesse", age: 15 }
      ]
    };
    console.log(this.state);
  }

  deleteUser = (index, e) => {
    // // since state cannot be mutated, Object.assign takes a copy of the users array
    // const users = Object.assign([], this.state.users);
    // use spread operator (ES6 JS): to create a copy of array,
    // for arrays and objects users = this.state.users(only assigns refernece resulting in mutating the original array)
    const users = [...this.state.users];
    console.log(("the users are": users));
    // remove user by index and remove 1 element
    users.splice(index, 1);
    this.setState({
      users: users
    });
  };

  changeUserName = (id, e) => {
    // find the index of the user based on the id passed
    // const index = this.state.users.findIndex(user => {
    //   return user.id === id;
    // });

    // get a copy of the state object users and find the corresponding copy of the user that need to be updated
    // const user = Object.assign({}, this.state.users[id]);
    const user = { ...this.state.users[id] };
    // update the user object
    user.name = e.target.value;
    // create copy of entire users
    const users = [...this.state.users];
    // update the corresponding user in the copy
    users[id] = user;

    this.setState({ users: users });
  };
  render() {
    return (
      <div className="App">
        <ul>
          {/*note: user.name is passed as value hence it is accessed as children and not by its prop name*/}
          {this.state.users.map((user, index) => {
            console.log(index);
            return (
              <User
                age={user.age}
                name={user.name}
                key={user.id}
                delEvent={this.deleteUser.bind(this, index)}
                changeEvent={this.changeUserName.bind(this, index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
