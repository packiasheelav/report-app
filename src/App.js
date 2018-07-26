import React, { Component } from 'react';
import Header from './component/Header';
import SearchButton from './component/SearchButton';
import ReportResults from './component/ReportResults';
import './style.css';
import data from './data.json';

let asc = false;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }


  sorting = () => {
    console.log("inside....");
    if (asc) {
      this.setState({ data: this.state.data.sort((a, b) => (a.id - b.id)) });
      asc = false;
    } else {
      this.setState({ data: this.state.data.sort((a, b) => (b.id - a.id)) });
      asc = true;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <SearchButton />
          <ReportResults dataArg={this.state.data}
            sorting={this.sorting}
          />
        </div>
      </div>
    );
  }
}

export default App;
