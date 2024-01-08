package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.model.Enum.FilterType;
import com.MichaelFJ.EA.model.Filter;

import java.util.List;
import java.util.Optional;

public interface FilterService {
    public List<Filter> getFiltersWithFilterType(FilterType type);
    public Optional<FilterType> getFilterTypes();
}
