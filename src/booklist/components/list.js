import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom' 
import _ from "lodash";
import { List as Ul , ListItem } from 'material-ui/List';

// import { history } from '../../store';
import BookDetail from "../../bookdetail";

import {
  selectedBook 
}
from "../actions/doFetchBooks";

class List extends Component {

  setActivebook(activeBookID) {
    let book = _.find(this.props.books, { id: activeBookID });
    console.log('')
    this.props.selectedBook(book)
    this.props.history.push('/preview'); // to programmatically change routes
  }

  render() {
    let { books } = this.props;

    if (_.isEmpty(books)) {
      return <div>Books ..... and lots of books here</div>;
    }

    var _this = this;
    let BooksList = books.map((book, index) => {
      return (
        <ListItem  
        data-book={book.id} className="list-group-item" 
        onClick={event => _this.setActivebook(book.id)} key={book.id}>
          {book.volumeInfo.title}
        </ListItem>
      );
    });

    return (
      <div className="container-fluid">
        <Ul>
          {BooksList}   
        </Ul>
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
    selectedBook
  }, dispatch)  
}

// withRouter will pass history as props to the component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));