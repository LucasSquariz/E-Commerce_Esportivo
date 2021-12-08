import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from '../pages/Carrinho/components/carrinho.js';
import Home from '../pages/Home/components/home.js';
import Produtos from '../pages/Produtos/components/produtos.js';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/header';
import Footer from '../components/footer';
import CarrinhoContext from '../contexts/CarrinhoContext'

const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
      <CarrinhoContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:produtoId" element={<Produtos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categoria/:categoria" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </CarrinhoContext>
    </HelmetProvider>
  </BrowserRouter>
);

export default RouteList;