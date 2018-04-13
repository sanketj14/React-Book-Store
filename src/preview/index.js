import React , { Component } from 'react';
import BookPreview from './components/preview';
 
class Preview extends Component {

  constructor (props) {
    super(props)
  } 

  render () {
    if (!this.props.book) {
      return <div>Loading...</div>
    }

    return (<BookPreview iframeURL={this.props.iframeURL}/>);
  }

}

export default Preview;
