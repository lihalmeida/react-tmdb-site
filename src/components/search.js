import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="search">
                <label>
                    <span>{this.props.label}</span>
                    <br/>
                    <input type="text" name="id" value={this.props.value} onChange={this.props.onChange} />
                </label>
                <button onClick={this.props.onClick}>ok</button>
            </div>
        );
    }
}
