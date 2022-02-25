package com.DH.Checkpoint.Integrador.service;

import com.DH.Checkpoint.Integrador.DTO.ProdutoDto;
import com.DH.Checkpoint.Integrador.persistence.model.Categoria;
import com.DH.Checkpoint.Integrador.persistence.model.Produto;
import com.DH.Checkpoint.Integrador.persistence.repository.CategoriaRepository;
import com.DH.Checkpoint.Integrador.persistence.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private CategoriaRepository repository;

    public  Produto insert(ProdutoDto produtoDto){
        Categoria categoria1 = repository.getById(produtoDto.getCategoriaId());
        Produto produto1 = new Produto();
        produto1.setNome(produtoDto.getNome());
        produto1.setImagem(produtoDto.getImagem());
        produto1.setPreco(produtoDto.getPreco());
        produto1.setCategoria(categoria1);
        produto1.setDescricao(produtoDto.getDescricao());

        return  produtoRepository.save(produto1);
    }

    public ProdutoDto converteDTO(Produto produto){
        ProdutoDto produtoDTO = new ProdutoDto();
        produtoDTO.setId(produto.getId());
        produtoDTO.setNome(produto.getNome());
        produtoDTO.setImagem(produto.getImagem());
        produtoDTO.setPreco(produto.getPreco());
        produtoDTO.setCategoriaId(produto.getCategoria().getId());
        produtoDTO.setDescricao(produto.getDescricao());

        return produtoDTO;
    }



    public List<ProdutoDto> selectAll(){

        List <Produto> listaProdutos = produtoRepository.findAll();
        List <ProdutoDto> listaProdutosDTO = new ArrayList<>();
        for (int i = 0; i < listaProdutos.size(); i++){
            ProdutoDto produtosDTO = new ProdutoDto();
            produtosDTO.setId(listaProdutos.get(i).getId());
            produtosDTO.setNome(listaProdutos.get(i).getNome());
            produtosDTO.setImagem(listaProdutos.get(i).getImagem());
            produtosDTO.setPreco(listaProdutos.get(i).getPreco());
            produtosDTO.setCategoriaId(listaProdutos.get(i).getCategoria().getId());
            produtosDTO.setDescricao(listaProdutos.get(i).getDescricao());

            listaProdutosDTO.add(produtosDTO);
        }
        return listaProdutosDTO;
    }
    public ProdutoDto select(Integer id){
        Produto produto1 = produtoRepository.getById(id);
        return converteDTO(produto1);
    }


    public List<ProdutoDto> selectCategProdt(Integer id){
        Categoria categoria1 = repository.getById(id);
        List<Produto> listaProdutos = produtoRepository.listarProdutos(categoria1);
        List <ProdutoDto> listaProdutosDTO = new ArrayList<>();

        if (id == categoria1.getId()){
            for (int i = 0; i < listaProdutos.size(); i++) {
                ProdutoDto produtosDTO = new ProdutoDto();
                produtosDTO.setId(listaProdutos.get(i).getId());
                produtosDTO.setNome(listaProdutos.get(i).getNome());
                produtosDTO.setImagem(listaProdutos.get(i).getImagem());
                produtosDTO.setPreco(listaProdutos.get(i).getPreco());
                produtosDTO.setDescricao(listaProdutos.get(i).getDescricao());
                produtosDTO.setCategoriaId(listaProdutos.get(i).getCategoria().getId());

                listaProdutosDTO.add(produtosDTO);
            }
        }

        return listaProdutosDTO;
    }

}
