import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greeting_slice';

const reducer = {
  greetings: greetingsReducer,
};

const store = configureStore({ reducer });

export default store;
