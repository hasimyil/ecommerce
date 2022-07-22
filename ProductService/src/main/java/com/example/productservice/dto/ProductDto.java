package com.example.productservice.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ProductDto {
    private UUID id;
    private String image;
    private String name;
    private String price;
    private String Brand;
    private double rating;
    private int stock;
    private int reviewCount;
    private String description;
    private boolean is_new;

}
