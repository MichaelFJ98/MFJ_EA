package com.MichaelFJ.EA.controller;

import com.MichaelFJ.EA.model.Enum.FilterType;
import com.MichaelFJ.EA.model.Filter;
import com.MichaelFJ.EA.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/filter")
@CrossOrigin
public class FilterController {
    @Autowired
    private FilterService filterService;

    @PostMapping("/GetTypes")
    Optional<FilterType> getFilterTypes(){
        return filterService.getFilterTypes();
    }

    @PostMapping("/GetFilterByType/{type}")
    List<Filter> getFiltersByType(@PathVariable FilterType type){
        return filterService.getFiltersWithFilterType(type);
    }
}
