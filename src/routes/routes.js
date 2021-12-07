import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from '../pages/Carrinho/components/carrinho.js';
import Home from '../pages/Home/components/home.js';
import Produtos from '../pages/Produtos/components/produtos.js';
import { HelmetProvider } from 'react-helmet-async';

const RouteList = () => (
  <BrowserRouter>    
    <HelmetProvider> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:produtoId" element={<Produtos />} />
      <Route path="/carrinho" element={<Carrinho />} /> 
    </Routes>
    </HelmetProvider> 
  </BrowserRouter>
);

export default RouteList;