import React , { Component } from "react";
import SearchInput from "./components/SearchInput";

class SearchBar extends Component { 

  render () {
    return (
      <div>
        <SearchInput onSearchTermChange={this.props.onSearchTermChange} onResetSearch={this.props.onResetSearch}/>
      </div>
    );
  }

}

export default SearchBar;