import React, { Component } from 'react';
import '../style.css';
class SearchButton extends Component {
    render() {
        return (
            <div id="searchButtonbox">
                <input className="searchbutton" type="text" name="search" placeholder="Search report..." />
            </div>
        );
    }
}
export default SearchButton;