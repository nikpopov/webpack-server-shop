const defaultState = {
    users: [],
    products: [],
    basket: [],
    users2: []
};

export function shopReducer(state = defaultState, action) {
  switch (action.type) {
    case "json users":
      return {...state, users: action.payload};
    case "json users2":
      return {...state, users2: action.payload};
    case "setProducts":
      return {...state, products: action.payload};
    case "json basket":
      return {...state, products: action.payload};
    default:
      return state;
    }
}