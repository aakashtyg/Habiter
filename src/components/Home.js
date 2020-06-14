import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { habits } = this.props;
    return (
      <div>
        <h1>List of habits</h1>

        <ul>
          {habits.map((habit, index) => (
            <li key={`habit-${index}`}>
              <div>{habit.name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ habits }) {
  return {
    habits,
  };
}

export default connect(mapStateToProps)(Home);
