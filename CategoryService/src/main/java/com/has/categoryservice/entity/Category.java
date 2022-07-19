package com.has.categoryservice.entity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity
public class Category{
    @Id
    private UUID id = UUID.randomUUID();
    private String title;
    private String image;
    private boolean is_deleted;

}
