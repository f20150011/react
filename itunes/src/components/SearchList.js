import React from 'react';

class SearchList extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        var searchListStyle = {
            
        };
        return (
            <div style={searchListStyle}>
                <ol>
                    {this.props.results.map((x,i) => <li key={i}> {x.trackName} </li>)}
                </ol>
            </div>
        );
    }
}

export default SearchList;