package com.DH.Checkpoint.Integrador.controller;

import com.DH.Checkpoint.Integrador.DTO.ProdutoDto;
import com.DH.Checkpoint.Integrador.persistence.model.Produto;
import com.DH.Checkpoint.Integrador.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService service;


    @PostMapping
    public ResponseEntity<Produto> createProduto(@RequestBody ProdutoDto produtoDto) {

        return ResponseEntity.ok(service.insert(produtoDto));
    }

    @GetMapping
    public ResponseEntity<List<ProdutoDto>> selectProduto() {

        return ResponseEntity.ok(service.selectAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDto> selectProdutoId(@PathVariable Integer id) {

        return ResponseEntity.ok(service.select(id));
    }

    @GetMapping("categoria/{id}")
    public ResponseEntity<List<ProdutoDto>> selectProdtCateg(@PathVariable Integer id) {

        return ResponseEntity.ok(service.selectCategProdt(id));
    }

}
