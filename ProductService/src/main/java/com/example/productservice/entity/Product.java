package com.example.productservice.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Product {
    @Id
    private UUID id = UUID.randomUUID();
    private String image;



    private String name;
    private double price;
    private String Brand;
    private double rating;
    private int stock;
    private int reviewCount;
    private boolean is_new = false;
    private boolean is_deleted = false;
    private String description;
    @ElementCollection
    @Column(name = "images")
    private List<String> images;



}
