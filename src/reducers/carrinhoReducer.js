export const carrinhoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PRODUTO':
        const checkIfUserAlreadyExists = state.filter(produto => {
          return produto.id === action.payload.id;
        });
        if (!checkIfUserAlreadyExists.length) {
          return [...state, action.payload];
        }
        return state;
      default:
        return state;
    }
  }