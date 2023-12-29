import { useContext, createContext, useReducer, useEffect } from 'react';

import cartItems from '../mock/data';
import { getTotals } from '../utils';
import reducer from './reducer';

import { CLEAR_CART, DECREASE, DISPLAY_ITEMS, INCREASE, LOADING, REMOVE } from './actions';

const AppContext = createContext();

const url = '../mock/json/data.json';

const initialState = {
  isLoading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });

    const res = await fetch(url);
    const data = await res.json();

    dispatch({ type: DISPLAY_ITEMS, payload: { data } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseAmount, decreaseAmount, totalAmount, totalCost }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
