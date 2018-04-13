import React , { Component } from 'react';
 
class BookPreview extends Component {

  constructor (props) {
    super(props)
  } 

  render () {
    return (
      <div className='video-player-section embed-responsive embed-responsive-21by9'>
        <iframe className='embed-responsive-item' src={this.props.iframeUrl}></iframe>
      </div>
    );
  }

}

export default BookPreview;
