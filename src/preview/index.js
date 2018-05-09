import React , { Component } from 'react';
import BookPreview from './components/preview';
 
class Preview extends Component {

  render () {
    if (!this.props.book) {
      return <div>Loading...</div>
    }

    return <BookPreview iframeURL={this.props.iframeURL}/>;
  }

}

export default Preview;
