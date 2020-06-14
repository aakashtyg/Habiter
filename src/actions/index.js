import { fetchHabits } from '../api';

export const ADD_HABITS = 'ADD_HABITS';

export function gethabitsFromDb() {
  return async (dispatch) => {
    const data = await fetchHabits();
    console.log('gethabitsFromDb -> data', data);
    dispatch(addHabitsToStore(data.habits));
  };
}

export function addHabitsToStore(habits) {
  return {
    type: ADD_HABITS,
    habits,
  };
}

export function updatehabit(habitId, progressId) {
  return {
    type: 'UPDATE_HABIT',
    habitId,
    progressId,
  };
}
