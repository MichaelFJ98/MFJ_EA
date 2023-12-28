package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public Category saveCategory(Category category);
    public List<Category> getAllCategories();

    public Optional<Category> getCategory(int cat_id);

}
