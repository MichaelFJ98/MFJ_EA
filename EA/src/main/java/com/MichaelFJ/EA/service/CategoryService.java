package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.model.Category;

import java.util.List;

public interface CategoryService {
    public Category saveCategory(Category category);
    public List<Category> getAllCategories();

}
