import { CLEAR_CART, DECREASE, DISPLAY_ITEMS, INCREASE, LOADING, REMOVE } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: new Map(),
      };

    case REMOVE:
      var newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return {
        ...state,
        cart: newCart,
      };

    case INCREASE:
      var newCart = new Map(state.cart);
      var id = action.payload.id;
      var item = newCart.get(id);
      var newItem = { ...item, amount: item.amount + 1 };
      newCart.set(id, newItem);
      return {
        ...state,
        cart: newCart,
      };

    case DECREASE:
      var newCart = new Map(state.cart);
      var id = action.payload.id;
      var item = newCart.get(id);
      var newItem = { ...item, amount: item.amount > 2 ? item.amount - 1 : 1 };
      newCart.set(id, newItem);
      return {
        ...state,
        cart: newCart,
      };

    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case DISPLAY_ITEMS:
      var newCart = new Map(action.payload.data.map((item) => [item.id, item]));
      return {
        ...state,
        isLoading: false,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
