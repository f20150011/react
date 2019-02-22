import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        var headerStyle = {
            fontSize: 50,
            color: '#4286f4'
        };
        return (
            <div style={headerStyle}>
                <b>Swalala Player</b>
            </div>
        );
    }
}

export default Header;