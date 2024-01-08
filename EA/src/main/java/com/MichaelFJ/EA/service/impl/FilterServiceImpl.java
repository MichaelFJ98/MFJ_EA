package com.MichaelFJ.EA.service.impl;

import com.MichaelFJ.EA.model.Enum.FilterType;
import com.MichaelFJ.EA.model.Filter;
import com.MichaelFJ.EA.repository.FilterRepository;
import com.MichaelFJ.EA.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilterServiceImpl implements FilterService {
    @Autowired
    private FilterRepository filterRepository;
    @Override
    public List<Filter> getFiltersWithFilterType(FilterType type) {
        return filterRepository.getFiltersWithFilterType(type);
    }

    @Override
    public Optional<FilterType> getFilterTypes() {

        return filterRepository.getFilterTypes();
    }
}
