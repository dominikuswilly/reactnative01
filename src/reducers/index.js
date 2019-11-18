import {combineReducers} from 'redux';

import page1 from './page1';
import page2 from './page2';

const rootReducer = combineReducers({
  page1,
  page2,
});

export default rootReducer;
