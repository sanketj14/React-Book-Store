import React , { Component } from "react";
import SearchInput from "./components/SearchInput";

class SearchBar extends Component { 

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <SearchInput onSearchTermChange={this.props.onSearchTermChange} onResetSearch={this.props.onResetSearch}/>
      </div>
    );
  }

}

export default SearchBar;