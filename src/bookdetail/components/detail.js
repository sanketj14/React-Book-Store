import React , { Component } from 'react';

class Detail extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let book = this.props.book;
    console.log('this.props in Detail @render ===>',this.props)
    if(_.isEmpty(book)){
      return null
    }

    return (
      <div>
        <div className="card">
          <img className="card-img-top img-fluid" src={book.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{book.volumeInfo.title}</h5>
            <h6 className="card-title">{book.volumeInfo.subtitle}</h6>
            <div className="card-text">
              <p>
                {book.volumeInfo.description}
              </p>
              <p>
                <a href={book.volumeInfo.previewLink} target="_blank">Click here for preview</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Detail;
