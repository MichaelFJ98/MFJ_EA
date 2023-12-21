package com.MichaelFJ.EA.controller;

import com.MichaelFJ.EA.model.Category;
import com.MichaelFJ.EA.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public String add(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "new category added";
    }

    @GetMapping("/getAll")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }
}
