package com.DH.Checkpoint.Integrador.persistence.repository;

import com.DH.Checkpoint.Integrador.persistence.model.Categoria;
import com.DH.Checkpoint.Integrador.persistence.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    @Query("SELECT p FROM Produto p WHERE p.categoria = ?1")
    List<Produto> listarProdutos(Categoria categoria);




}
