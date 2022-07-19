package com.has.categoryservice.repository;

import com.has.categoryservice.entity.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CategoryRepository extends CrudRepository<Category, UUID> {

    Optional<Category> findCategoryByTitle(String title);
}
