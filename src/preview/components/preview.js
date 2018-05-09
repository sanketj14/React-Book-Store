import React , { Component } from 'react';
 
class BookPreview extends Component {

  render () {
    return (
      <div className='embed-responsive embed-responsive-21by9'>
        <iframe className='embed-responsive-item' src={this.props.iframeUrl}></iframe>
      </div>
    );
  }

}

export default BookPreview;
