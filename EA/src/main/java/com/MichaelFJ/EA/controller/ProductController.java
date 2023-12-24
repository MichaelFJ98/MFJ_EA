package com.MichaelFJ.EA.controller;

import com.MichaelFJ.EA.model.Product;
import com.MichaelFJ.EA.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public String add(@RequestBody Product product){
        productService.saveProduct(product);
        return "new product added";
    }

    @GetMapping("/cat_id/{cat_id}")
    List<Product> findByCatId(@PathVariable("cat_id") int cat_id){
       return productService.getProductsByCat(cat_id);
    }

    @GetMapping("/getAll")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }
}
