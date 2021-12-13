import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrinho from '../pages/Carrinho/carrinho.js'
import Home from '../pages/Home/home.js'
import Produto from '../pages/Produto/produto.js'
import { HelmetProvider } from 'react-helmet-async'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import CarrinhoContext from '../contexts/CarrinhoContext'
import Produtos from '../pages/Produtos/produtos'
import Categoria from '../pages/Categoria/categoria'
import Sobre from '../pages/SobreNos/sobre'

const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
      <CarrinhoContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos/:produtoId" element={<Produto />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categoria/:categoria" element={<Categoria />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </CarrinhoContext>
    </HelmetProvider>
  </BrowserRouter>
)

export default RouteList
