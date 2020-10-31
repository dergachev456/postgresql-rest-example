import { combineReducers } from 'redux';
import orders from './orders';
import main from './main';
import statistics from './statistics';


const rootReducer = combineReducers({orders, main, statistics});

export default rootReducer;