import React , { Component } from "react";
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  doFetchBooks,
  doSuccessFetchBooks,
  doCancelFetchBooks
} from './booklist/actions/doFetchBooks'

import Header from './header/index';
import SearchBar from './search-bar/index';
import BookList from './booklist/index';
import PreviewComponent from './preview/index';

class App extends Component { 

  constructor (props) {
    super(props);
    this.state = {
      searchResults: []
    }
    this.resetSearch = this.resetSearch.bind(this);
  }
  
  componentDidMount () {
    this.props.fetchBooks('react');
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps ===>', nextProps);
    if (_.isEmpty(this.state.searchResults.length)) {
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
    
    const BookSearch = _.debounce((term) => { this.props.fetchBooks(term) }, 1500)

    return (
      <div className='App'>
        <Header />
        <SearchBar onSearchTermChange={BookSearch} onResetSearch={this.resetSearch}/>    
        <div>
        {/* (
          <Switch>

            <Route exact path="/" render={}/>

          </Switch>
        ); */}
        <BookList books={this.state.searchResults} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks : (term) => {
      dispatch(doFetchBooks(term))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
