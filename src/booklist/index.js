import React , { Component } from 'react';
import List from './components/list';
 
class BookList extends Component {

  constructor (props) {
    super(props)
  } 

  render () {
    if (!this.props.books) {
      return <div>Loading...</div>
    }

    return (<List books={this.props.books}/>);
  }

}

export default BookList;
