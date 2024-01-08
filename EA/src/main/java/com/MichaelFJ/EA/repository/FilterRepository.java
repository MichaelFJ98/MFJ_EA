package com.MichaelFJ.EA.repository;

import com.MichaelFJ.EA.model.Enum.FilterType;
import com.MichaelFJ.EA.model.Filter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FilterRepository extends JpaRepository<Filter, Integer> {


    //Find all Filters (no duplicates)
    @Query("SELECT DISTINCT f.type FROM Filter f")
    Optional<FilterType> getFilterTypes();


    //Find all filters where the filtertype is equal to the given type.
    @Query("SELECT f FROM Filter f WHERE f.type = :type")
    List<Filter> getFiltersWithFilterType(FilterType type);
}
