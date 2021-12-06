import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from '../pages/Carrinho/components/carrinho.js';
import Home from '../pages/Home/components/home.js';
import Produtos from '../pages/Produtos/components/produtos.js';

const RouteList = () => (
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:produtoId" element={<Produtos />} />
      <Route path="/carrinho" element={<Carrinho />} />
      
      
    </Routes>
  </BrowserRouter>
);

export default RouteList;