import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatehabit } from '../actions';

class Progress extends Component {
  getHabutStatus(status) {
    if (status === 1) {
      return (
        <span>
          <img
            src="https://image.flaticon.com/icons/svg/1632/1632596.svg"
            alt=""
            height={40}
          />
        </span>
      );
    } else if (status === 0) {
      return (
        <span>
          <img
            src="https://image.flaticon.com/icons/png/512/1828/1828666.png"
            alt=""
            height={40}
          />
        </span>
      );
    } else {
      return <div></div>;
    }
  }

  handleStausChange = (habitId, itemId) => {
    this.props.dispatch(updatehabit(habitId, itemId));
  };
  render() {
    const { habits } = this.props;
    return (
      <div>
        <h1>List of habits</h1>

        <ul>
          {habits.map((habit, index) => (
            <li key={`habit-${index}`}>
              <div className="habit-name">{habit.name}</div>
              <div className="all-habits">
                {habit.progress.map((item, index) => (
                  <div className="habit-day">
                    <div className="date">{item.date}</div>

                    <div
                      className="status"
                      onClick={() => this.handleStausChange(habit.id, item.id)}
                    >
                      {this.getHabutStatus(item.status)}
                    </div>
                  </div>
                ))}
              </div>
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

export default connect(mapStateToProps)(Progress);
