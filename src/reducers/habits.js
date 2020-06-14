import { ADD_HABITS } from '../actions';

export default function habits(state = [], action) {
  if (action.type === ADD_HABITS) {
    return action.habits;
  } else if (action.type === 'UPDATE_HABIT') {
    const { habitId, progressId } = action;
    const habit = state[habitId - 1];
    const progressDay = habit.progress.filter((item) => progressId === item.id);

    if (progressDay[0].status === 1) {
      progressDay[0].status = 0;
    } else if (progressDay[0].status === 0) {
      progressDay[0].status = 1;
    } else {
      progressDay[0].status = 1;
    }

    return [...state];
  }
  return state;
}
