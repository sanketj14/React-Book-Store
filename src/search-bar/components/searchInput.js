import React , { Component } from "react";
import _ from 'lodash';

class SearchInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.fetchResults = this.fetchResults.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  fetchResults (event) {

    this.setState({
      searchTerm: event.target.value 
    });
    
    this.props.onSearchTermChange(event.target.value)
  }

  resetHandler () {
    this.setState({
      searchTerm: '' 
    });
    this.props.onResetSearch();
  }

  render () {

    return (
      <div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search a book from google books library.." onInput={this.fetchResults} aria-label="" value={this.state.searchTerm} aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={this.resetHandler} type="button">Reset</button>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchInput;