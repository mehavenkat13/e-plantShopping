const initialState = {
  items: [],
};

export const addItem = (state, action) => {
  state.items.push(action.payload);
};

export const removeItem = (state, action) => {
  state.items = state.items.filter(
    (item) => item.id !== action.payload
  );
};

export const updateQuantity = (state, action) => {
  const item = state.items.find(
    (item) => item.id === action.payload.id
  );
  if (item) {
    item.quantity = action.payload.quantity;
  }
};

export default initialState;

