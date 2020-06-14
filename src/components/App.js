import React from 'react';
import { Home, Progress } from './';
import { connect } from 'react-redux';
import { gethabitsFromDb } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(gethabitsFromDb());
  }

  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Progress />
      </div>
    );
  }
}

export default connect()(App);
