package com.has.categoryservice.service;


import com.has.categoryservice.dto.CategoryDto;
import com.has.categoryservice.entity.Category;

import java.util.List;
import java.util.UUID;


public interface CategoryService {
  List<CategoryDto> getAll();
  Category save(Category category);
  Boolean delete(UUID id);

}
