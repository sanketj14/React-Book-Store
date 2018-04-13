import React , { Component } from "react";
import Detail from "./components/detail";

class BookDetail extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    console.log('inside bookdetail ===>',this.props)
    return (<Detail book={this.props.book}/>);
  }

}

export default BookDetail;