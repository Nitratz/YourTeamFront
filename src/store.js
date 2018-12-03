import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/user-reducer";
import loadingReducer from "./reducers/loading-reducer";
import loggedReducer from "./reducers/logged-reducer";
import thunk from "redux-thunk";
import gameReducer from './reducers/game-reducer';
import errorReducer from './reducers/error-reducer';

const allReducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  logged: loggedReducer,
  games: gameReducer,
  error: errorReducer
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
