package com.DH.Checkpoint.Integrador.service;

import com.DH.Checkpoint.Integrador.persistence.model.Categoria;
import com.DH.Checkpoint.Integrador.persistence.model.Produto;
import com.DH.Checkpoint.Integrador.persistence.repository.CategoriaRepository;
import com.DH.Checkpoint.Integrador.persistence.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;


    public Categoria insert(Categoria categoria) {

        return repository.save(categoria);
    }

    public List<String> selectAll() {

        return repository.tdsCategorias();
    }

}
