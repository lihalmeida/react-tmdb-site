import React from 'react';
import Search from './search.js';
import Results from './results.js';
import {requestById, requestByQuery} from '../services/movies.js';

export default class App extends React.Component {
    state = {
        valueId: '',
        valueQuery: '',
        results: [
            // {
            //     id: '54545454',
            //     original_title: 'Titanic',
            //     popularity: 4.67,
            //     release_date: '2010/06/12',
            //     poster_path: '',
            //     overview: 'lorem'
            // }
        ]
    }

    componentDidMount() {
        this.requestById(550);
    }

    requestByQuery(query) {
        requestByQuery(query)
          .then(response => {
              this.setState({results: response.results})
          });
    }

    requestById(id) {
        requestById(id)
          .then(response => {
              const results = response ? [response] : [];
              this.setState({results})
          });
    }

    handleIdChange = (e) => {
        this.setState({valueId: e.target.value}) 
    }

    handleQueryChange = (e) => {
        this.setState({valueQuery: e.target.value}) 
    }

    handleIdClick = (e) => {
        this.requestById(this.state.valueId);
    }
    
    handleQueryClick = (e) => {
        this.requestByQuery(this.state.valueQuery);
    }

    render() {
        return (
            <div>
                <h1>TMDB Search</h1>
                <Search
                    label="Pesquisa por ID:"
                    value={this.state.valueId}
                    onChange={this.handleIdChange}
                    onClick={this.handleIdClick}
                />
                <Search 
                    label="Pesquisa por Query:" 
                    value={this.state.valueQuery} 
                    onChange={this.handleQueryChange}
                    onClick={this.handleQueryClick}
                />
                <br/>
                <hr/>
                <h4>Resultados da Pesquisa:</h4>
                <Results results={this.state.results}/>
            </div>
        );
    }
}