import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrinho from '../pages/Carrinho/carrinho.js';
import Home from '../pages/Home/home.js';
import Produto from '../pages/Produto/produto.js';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/header';
import Footer from '../components/footer';
import CarrinhoContext from '../contexts/CarrinhoContext';
import Produtos from '../pages/Produtos/produtos';
import Categorias from '../pages/Categoria/categoria'

const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
      <CarrinhoContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos/:produtoId" element={<Produto />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/categoria/:categoria" element={<Categorias />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </CarrinhoContext>
    </HelmetProvider>
  </BrowserRouter>
);

export default RouteList;