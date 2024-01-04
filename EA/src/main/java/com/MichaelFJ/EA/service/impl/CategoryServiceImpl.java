package com.MichaelFJ.EA.service.impl;

import com.MichaelFJ.EA.model.Category;
import com.MichaelFJ.EA.repository.CategoryRepository;
import com.MichaelFJ.EA.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Category saveCategory(Category category) {

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getAllCategories() {

        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> getCategory(int cat_id) {
        return categoryRepository.findById(cat_id);
    }
}
