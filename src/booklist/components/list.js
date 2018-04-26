import React, { Component } from "react";
import _ from "lodash";
import {List as Ul , ListItem} from 'material-ui/List';

import BookDetail from "../../bookdetail/index";

class List extends Component {
  constructor(props) {
    super(props);
    console.log("props in list comp===>", this.props);
    this.state = {
      activeBook: {}
    };
  }

  setActivebook(event, activeBookID) {
    // event.target.parentElement.classList.add('active');
    let book = _.find(this.books, { id: activeBookID });

    this.setState({
      activeBook: book
    });
    console.log("active book ====>", this.state.activeBook);
  }

  render() {
    console.log("props in list comp 2===>", this.props);
    this.books = this.props.books;

    if (_.isEmpty(this.books)) {
      return <div>Books ..... and lots of books here</div>;
    }

    var _this = this;
    let BooksList = this.books.map((book, index) => {
      return (
        <ListItem key={book.id} 
        data-book={book.id} className="list-group-item" 
        onClick={event => _this.setActivebook(event, book.id)}>
          {book.volumeInfo.title}
        </ListItem>
      );
    });

    return (
      <div className="container-fluid">
        <Ul>
          {BooksList}   
        </Ul>
        <BookDetail book={this.state.activeBook} />
      </div>
    );
  }
}

export default List;
