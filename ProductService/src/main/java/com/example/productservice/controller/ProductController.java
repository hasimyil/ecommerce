package com.example.productservice.controller;

import com.example.productservice.dto.GenericResponse;
import com.example.productservice.dto.ProductDto;
import com.example.productservice.entity.Product;
import com.example.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<?> getAll(){
        var loResult = productService.getAll();
        if(loResult.size() > 0){
            return ResponseEntity.ok(new GenericResponse(loResult.size()+ " product found!", 200, loResult));
        }
        return ResponseEntity.ok(new GenericResponse("Product not found!", -1, null));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable UUID id){
        var loResult = productService.getProductById(id);
        if(loResult != null){
            return ResponseEntity.ok(new GenericResponse(loResult.getName()+ " found!", 200, loResult));
        }
        return ResponseEntity.ok(new GenericResponse("Product not found", -1, null));
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody  Product product){
        var loResult = productService.save(product);
        if(loResult != null){
            return ResponseEntity.ok(new GenericResponse(loResult.getName()+ " has been added succesfully!", 200, loResult));
        }
        return ResponseEntity.ok(new GenericResponse("There is an error, please try again", -1, null));
    }

}
