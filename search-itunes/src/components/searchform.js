import React, { Component } from "react";

export class SearchForm extends Component {
    constructor() { // properties go inside constructor
        super();
        this.state = {
            name: "eminem",
            age: 0,
            user: {uname: "",age: 0},
            users: []
        };
        this.update = this.update.bind(this);
    }
    render() {
        return (
            <div>
                <input name="name" value={this.state.name} onChange={this.update}></input>
                <input name="age" value={this.state.age} onChange={this.update}></input>
                <button onClick={(event) => {
                    this.state.user = {uname: this.state.name, age: this.state.age};
                    this.state.users.push(this.state.user);
                    this.setState({
                        users : this.state.users
                    });
                }}>Search</button>
                <ol>
                    { this.state.users.map((user) => <li>{user.uname + " " + user.age}</li>) }
                </ol>
            </div>
        )
    }

//////////////// not required since we are using event.target.name ///////////////////////

    // update_name(event) {
    //     this.setState({
    //         name: event.target.value
    //     });
    // }

    // update_age(event) {
    //     this.setState({
    //         age: event.target.value
    //     });
    // }

//////////////////////////////////////////////////////////////////////////////////////////

    update(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
}