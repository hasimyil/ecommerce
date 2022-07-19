package com.has.categoryservice.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class CategoryDto {
    private UUID id;
    private String title;
    private String image;
    private boolean is_deleted;
}
