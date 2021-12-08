export const carrinhoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PRODUTO':
        const checkIfProductAlreadyExists = state.filter(produto => {
          return produto.id === action.payload.id;
        });
        if (!checkIfProductAlreadyExists.length) {
          return [...state, action.payload];
        }
        return state;
      default:
        return state;
    }
  }