import { combineReducers } from 'redux';
import users from './users';
import habits from './habits';
import progress from './progress';

export default combineReducers({
  users: users,
  habits: habits,
  progress: progress,
});
