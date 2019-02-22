import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e) {
        e.preventDefault();
        console.log('Success!');
    }

    render() {
        return <button onClick={this.handleClick}>Ok</button>;
    }
}