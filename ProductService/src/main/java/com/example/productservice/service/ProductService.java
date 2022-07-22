package com.example.productservice.service;

import com.example.productservice.dto.ProductDto;
import com.example.productservice.entity.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {
     Product save(Product product);
     Product update(Product product);
     Product getProductById(UUID id);
     List<ProductDto> getAll();
     ProductDto addStock(UUID id, int numberOfStock);
     Boolean delete(UUID id);
     List<ProductDto> getProductByName();
     List<ProductDto> search(String keyword);
}
