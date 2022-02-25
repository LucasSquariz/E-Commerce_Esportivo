package com.DH.Checkpoint.Integrador.persistence.repository;

import com.DH.Checkpoint.Integrador.persistence.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

    @Query("SELECT c.nome FROM Categoria c ")
    List<String>tdsCategorias();
}
