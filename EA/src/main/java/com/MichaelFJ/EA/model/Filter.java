package com.MichaelFJ.EA.model;

import com.MichaelFJ.EA.model.Enum.FilterOperator;
import com.MichaelFJ.EA.model.Enum.FilterType;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data
@Entity
@Getter
@Setter
public class Filter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int amount;

    private FilterOperator operator;

    private FilterType type;


}
