import React from 'react';
import PropTypes from 'prop-types';

export default class Results extends React.Component {
    static propTypes = {
        results: PropTypes.arrayOf(PropTypes.object)
    }

    renderMovie(movie) {
        return (
            <div className="result" key={movie.id}>
                <div>{movie.id}</div>
                <h2>{movie.original_title}</h2>
                <h4>{movie.popularity}</h4>
                <h6>{movie.release_date}</h6>
                <span>{movie.poster_path}</span>
                <p>{movie.overview}</p>
            </div>
        );
    }

    render() {
        return this.props.results.length
            ? this.props.results.map(this.renderMovie)
            : (<div>No Results</div>);
    }
}