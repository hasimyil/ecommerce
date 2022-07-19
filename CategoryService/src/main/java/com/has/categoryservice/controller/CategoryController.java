package com.has.categoryservice.controller;

import com.has.categoryservice.dto.GenericResponse;
import com.has.categoryservice.entity.Category;
import com.has.categoryservice.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/category")
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Category category){
        var loResult = categoryService.save(category);
        if(loResult != null){
          return ResponseEntity.ok(new GenericResponse("Category added successfully!", 200, loResult));
        }

        return ResponseEntity.badRequest().body(new GenericResponse("Category already exist", -1, null));
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        var loResult = categoryService.getAll();
        if(loResult.size() > 0){
            return ResponseEntity.ok(new GenericResponse(loResult.size() + " category found!", 200, loResult));
        }
        return ResponseEntity.badRequest().body(new GenericResponse("Category not found!", -1, null));
    }
}
