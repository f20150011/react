import React from 'react';
import SearchList from './SearchList';

class SearchForm extends React.Component {
    URL = {
        baseUrl: "https://itunes.apple.com/",
        search: "search?term=",
        defaultsearch: "eminem",
        limit: "&limit=5",
        defaultUrl: "https://itunes.apple.com/search?term=eminem&limit=5"
    };
    constructor() {
        super();
        this.state = {
            query: "",
            results: []
        }
        this.search = this.search.bind(this);
    }
    itunesAPI() {
        let URL = this.URL.defaultUrl;
        if(this.state.query)
            URL = this.URL.baseUrl+this.URL.search+ this.state.query +this.URL.limit;
        fetch(URL)
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
        var formStyle = {
            // backgroundColor : "#eaeaea"
        };
        return (
            <div className="form-group" style={searchFormStyle}>
                <input style={formStyle} className="form-control" name="query" value={this.state.name} onChange={this.search}></input>
                <button className="btn btn-primary form-control" onClick={(event) => {
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