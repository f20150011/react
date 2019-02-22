import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {

        var appStyle = {
            width: 500,
            padding: 25,
            fontWeight : 250
        };

        return (
            <div style={appStyle}>
                <Header></Header>
                <SearchForm></SearchForm>
            </div>
        );
    }
};

App.protoTypes = {
    // TODO: this checking isnt working 
    // URL: React.protoTypes.object
};

App.defaultProps = {
    // not working have a look
    // URL: {
    //     baseUrl: "https://itunes.apple.com/",
    //     search: "search?term=",
    //     defaultsearch: "eminem",
    //     limit: "&limit=5",
    //     defaultUrl: "https://itunes.apple.com/search?term=eminem&limit=5"
    // }
};

export default App;