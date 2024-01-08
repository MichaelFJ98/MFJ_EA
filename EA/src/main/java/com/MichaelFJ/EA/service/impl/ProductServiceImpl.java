package com.MichaelFJ.EA.service.impl;

import com.MichaelFJ.EA.model.Product;
import com.MichaelFJ.EA.repository.ProductRepository;
import com.MichaelFJ.EA.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }


    @Override
    public List<Product> getProductsByCat(int cat_id) {
        return productRepository.findByCatId(cat_id);
    }


    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getProductsByString(String textInput) {
        return productRepository.findByString(textInput);
    }
}
