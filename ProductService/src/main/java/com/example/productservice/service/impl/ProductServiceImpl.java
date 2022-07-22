package com.example.productservice.service.impl;

import com.example.productservice.dto.ProductDto;
import com.example.productservice.entity.Product;
import com.example.productservice.repository.ProductRepository;
import com.example.productservice.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private  ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public Product save(Product product) {
        var loResult = productRepository.save(product);
        if(loResult.getId() != null) return loResult;
        return new Product();
    }

    @Override
    public Product update(Product product) {
        var findProduct = productRepository.findById(product.getId());
        if(findProduct.isPresent()){
            var loProduct = new Product();
            var loResult = productRepository.save(modelMapper.map(product, Product.class));
            if(loResult.getId() != null) return loResult;
        }
        return null;
    }

    @Override
    public Product getProductById(UUID id) {
        var loResult = productRepository.findById(id);
        if(loResult.isPresent()) return loResult.get();

        return null;
    }

    @Override
    public List<ProductDto> getAll() {
        var loResult = new ArrayList<ProductDto>();
        productRepository.findAll().forEach(item ->{
            if(!item.is_deleted())
            loResult.add(modelMapper.map(item, ProductDto.class));
        });
        return loResult;
    }

    @Override
    public ProductDto addStock(UUID id, int numberOfStock) {
        var findProduct = productRepository.findById(id);
        if(findProduct.isPresent()){
            var loResult = findProduct.get();
            loResult.setStock(loResult.getStock() + numberOfStock);
            return modelMapper.map(productRepository.save(loResult), ProductDto.class);
        }
        return null;
    }

    @Override
    public Boolean delete(UUID id) {
        return null;
    }

    @Override
    public List<ProductDto> getProductByName() {
        return null;
    }

    @Override
    public List<ProductDto> search(String keyword) {
        return null;
    }
}
