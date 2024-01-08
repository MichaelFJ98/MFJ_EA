package com.MichaelFJ.EA.repository;

import com.MichaelFJ.EA.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    //custom query to find all products where the product foreignkey's id is equal to the category id.
    @Query("SELECT p FROM Product p WHERE p.category.id = :cat_id")
    List<Product> findByCatId(@Param("cat_id") int cat_id);


    //Find all products where textinput is found in the productname.
    @Query("SELECT p FROM Product p WHERE p.name LIKE %:textInput%")
    List<Product> findByString(@Param("textInput") String textInput);

}
