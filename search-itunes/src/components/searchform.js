import React, { Component } from "react";

export class SearchForm extends Component {
    constructor() { // properties go inside constructor
        super();
        this.state = {
            name: "pi",
            age: 31415,
            gender: "other",
            user: { name: "", age: 0, gender: "male" },
            users: []
        };
        this.update = this.update.bind(this);
    }
    render() {
        return (
            <div>
                <input name="name" value={this.state.name} onChange={this.update}></input>
                <input name="age" value={this.state.age} onChange={this.update}></input>
                <input type="radio" name="gender" value="male" onChange={this.update}/> Male
                <input type="radio" name="gender" value="female" onChange={this.update}/> Female
                <input type="radio" name="gender" value="other" onChange={this.update}/> Other
                <button onClick={(event) => {
                    this.state.user = { name: this.state.name, age: this.state.age, gender: this.state.gender};
                    this.state.users.push(this.state.user);
                    this.setState({
                        users: this.state.users
                    });
                }}>Search</button>
                <ol>
                    {this.state.users.map((user) => <li>{user.name + " " + user.age + " " + user.gender}</li>)}
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