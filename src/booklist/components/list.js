import React , { Component } from 'react';
import _ from 'lodash';

import BookDetail from '../../bookdetail/index'

class List extends Component {

  constructor (props) {
    super(props);   
    console.log('props in list comp===>',this.props)    
    this.state = {
      activeBook: {}
    }
  }

  setActivebook (event, activeBookID) {
    // event.target.parentElement.classList.add('active');
    let book = _.find(this.books, { id: activeBookID });
    
    this.setState({
      activeBook: book
    })
    console.log('active book ====>',this.state.activeBook)
  }
  
  render () {
    console.log('props in list comp 2===>',this.props)
    this.books = this.props.books;
    
    if (_.isEmpty(this.books)) {
      return (
        <div>
          Books ..... and lots of books here
        </div>
      )
    }


    var _this = this;
    let BooksList = this.books.map((book, index) => {
      return (
        <li key={book.id} className="list-group-item">
          <a href="#" data-book={book.id} onClick={(event) => _this.setActivebook(event, book.id)} >{book.volumeInfo.title}</a>
        </li>
      )
    })

    return (
      <div className="row">
        <div className="col-8">
          <ul className="list-group">
            {BooksList}
          </ul>
        </div>
        <div className="col-4">
          <BookDetail book={this.state.activeBook}/>
        </div>
      </div>
    );
  }

}

export default List;