import _ from 'lodash';
import React , { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import {
  doFetchBooks
} from './booklist/actions/doFetchBooks'

import Routes from './routes';
import Header from './header';
import SearchBar from './search-bar';
import BookList from './booklist';
import PreviewComponent from './preview';

class App extends Component { 

  constructor (props) {
    super(props);
    this.state = {
      searchResults: []
    }
    this.resetSearch = this.resetSearch.bind(this);
  }
  
  componentDidMount () {
    this.props.doFetchBooks('react');
  }

  componentWillReceiveProps(nextProps, prevProps) {
    if (_.isEmpty(this.state.searchResults) || !_.isEqual(nextProps, prevProps)) {
      this.setState({
        searchResults: nextProps.books
      })
    }
  }

  resetSearch () {
    this.setState({
      searchResults: []
    })
  }

  render () {
    
    const BookSearch = _.debounce((term) => { this.props.doFetchBooks(term) }, 1500)
    
    return (
      <div className='App'>
        <Header />
        <SearchBar onSearchTermChange={BookSearch} onResetSearch={this.resetSearch}/>    
        <div>
          {Routes}
        </div>
      </div>  
    );
  }

}

const mapStateToProps = state => {
  let Library = state.BooksReducer.applyFetchBooksReducer
  return {
    books: Library.books,
    isLoading: Library.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    doFetchBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
