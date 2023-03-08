import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from './redux/greeting/greeting_slice';

const Greetings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const greetings = useSelector((state) => state.greetings);

  return (<h1>{greetings.text}</h1>);
};

export default Greetings;
