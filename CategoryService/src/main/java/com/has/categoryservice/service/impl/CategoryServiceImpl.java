package com.has.categoryservice.service.impl;

import com.has.categoryservice.dto.CategoryDto;
import com.has.categoryservice.entity.Category;
import com.has.categoryservice.repository.CategoryRepository;
import com.has.categoryservice.service.CategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<CategoryDto> getAll() {
      var loCategoryList = new ArrayList<CategoryDto>();
      categoryRepository.findAll().forEach(item ->{
          loCategoryList.add(modelMapper.map(item,CategoryDto.class));
      });
        return loCategoryList;
    }

    @Override
    public Category save(Category category) {
        var findCategory = categoryRepository.findCategoryByTitle(category.getTitle());
        if(!findCategory.isPresent()){
          return   categoryRepository.save(category);
        }
        return null;
    }
}
