import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

class Detail extends Component {

  openPreview(previewLink) {
    window.open(previewLink);
  }

  render() {
    let book = this.props.activeBook;
    console.log('book', book);
    if (_.isEmpty(book)) {
      return <div>
        <RaisedButton onClick={window.history.go(-1)}> Back </RaisedButton>
      </div>;
    }

    return (
      <div className="container-fluid">
        <Card>
          <CardMedia
            overlay={
              <CardTitle
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
              />
            }
          >
            <img
              className="card-img-top img-fluid"
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""}
              alt="Card image cap"
            />
          </CardMedia>
          <CardText>{book.volumeInfo.description}</CardText>
          <CardActions>
            <RaisedButton
              label="Preview"
              onClick={() => this.openPreview(book.volumeInfo.previewLink)}
            />
            <RaisedButton label="Buy" primary={true} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let Library = state.BooksReducer.applyFetchBooksReducer  
  console.log('state.BooksReducer.applyFetchBooksReducer', Library)
  return {
    activeBook: Library.activeBook
  }
}

export default connect(mapStateToProps, null)(Detail);
