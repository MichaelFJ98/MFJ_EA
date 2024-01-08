package com.MichaelFJ.EA.repository;

import com.MichaelFJ.EA.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p WHERE p.category.id = :cat_id")
    List<Product> findByCatId(@Param("cat_id") int cat_id);

    @Query("SELECT p FROM Product p WHERE p.name LIKE %:textInput%")
    List<Product> findByString(@Param("textInput") String textInput);

}
