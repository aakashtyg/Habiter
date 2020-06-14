import { combineReducers } from 'redux';
import user from './user';
import habits from './habits';
import progress from './progress';

export default combineReducers({
  user: user,
  habits: habits,
  progress: progress,
});
