import { createContext, useReducer, useEffect } from 'react';
import { carrinhoReducer } from '../reducers/carrinhoReducer';

export const CarrinhoContext = createContext();

const CarrinhoContextProvider = ({ children }) => {
  const [produto, dispatch] = useReducer(carrinhoReducer, [], () => {
    const localData = localStorage.getItem('produto');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('produto', JSON.stringify(produto));
  }, [produto]);

  const addProduto = (produto) => dispatch({ type: 'ADD_PRODUTO', payload: produto });

  return (
    <CarrinhoContext.Provider value={{ produto, addProduto }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoContextProvider;