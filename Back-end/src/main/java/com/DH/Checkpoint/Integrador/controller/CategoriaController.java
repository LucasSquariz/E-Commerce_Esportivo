package com.DH.Checkpoint.Integrador.controller;

import com.DH.Checkpoint.Integrador.persistence.model.Categoria;
import com.DH.Checkpoint.Integrador.persistence.model.Produto;
import com.DH.Checkpoint.Integrador.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @PostMapping
    public ResponseEntity<Categoria> createCategoria(@RequestBody Categoria categoria) {

        return ResponseEntity.ok(service.insert(categoria));
    }

    @GetMapping
    public ResponseEntity<List<String>> selectCategoria() {

        return ResponseEntity.ok(service.selectAll());
    }
}
