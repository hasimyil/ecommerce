package com.has.categoryservice.service;


import com.has.categoryservice.dto.CategoryDto;
import com.has.categoryservice.entity.Category;

import java.util.List;


public interface CategoryService {
  List<CategoryDto> getAll();
  Category save(Category category);

}
