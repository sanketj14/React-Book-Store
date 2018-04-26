import React, { Component } from "react";
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
  constructor(props) {
    super(props);
  }

  openPreview(previewLink) {
    window.open(previewLink);
  }

  render() {
    let book = this.props.book;
    if (_.isEmpty(book)) {
      return null;
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

export default Detail;
