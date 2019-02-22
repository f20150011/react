import React from 'react';

class SearchList extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        var searchListStyle = {
            paddingTop: 25
        };
        var listStyle = {
            paddingTop : 10,
            paddingBottom : 10,
            backgroundColor: '#eaeaea',
            fontWeight : 1000
        }
        var imgStyle = {
            float : 'right',
        }
        return (
            <div style={searchListStyle}>
                <ul className="list-group">
                    {this.props.results.map((x,i) => 
                    <li style={listStyle} className="list-group-item" key={i}> 
                        {x.trackName}
                        <audio src={x.previewUrl}>Play</audio>
                        <img style={imgStyle} src={x.artworkUrl60} alt="img"/>
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default SearchList;