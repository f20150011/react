import React from 'react';
import SearchList from './SearchList';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            results: []
        }
        this.search = this.search.bind(this);
    }
    itunesAPI() {
        fetch("https://itunes.apple.com/search?term=jack+johnson&limit=5")
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        results: response.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        var searchFormStyle = {

        };
        return (
            <div className="form-group" style={searchFormStyle}>
                <input className="form-control" name="name" value={this.state.name} onChange={this.search}></input>
                <button className="btn btn-primary form-control" onClick={(event) => {
                    // make an ajax call using jquery
                    this.itunesAPI();
                }}>Search</button>
                <SearchList results={this.state.results}></SearchList>
            </div>
        );
    }
    search(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
}

export default SearchForm;