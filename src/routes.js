import React , { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import BookDetail from './bookdetail';
import BookList from './booklist';

export default (
<Switch>

  <Route exact path="/preview" component={BookDetail} />

  <Route exact path="/" component={BookList} />

</Switch>
);
