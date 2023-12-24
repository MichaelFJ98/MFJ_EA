package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.model.Product;

import java.util.List;


public interface ProductService {
    public Product saveProduct(Product product);

    public List<Product> getProductsByCat(int cat_id);
    public List<Product> getAllProducts();
}
