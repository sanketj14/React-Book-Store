import React, { Component } from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';

class Title extends Component {

  render () {
    return (
      <Card >
        <AppBar
          title="Book Store"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </Card>
    )
  }

}

export default Title;