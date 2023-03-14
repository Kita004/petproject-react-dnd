package com.codecool.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.Set;

@Getter
@Setter
@Entity
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    // TODO: make it UUID
    private Long id;

    private String name;
    private Integer level;
    private String charClass;
    private String subClass;
    private String race;
    private String background;
    private String alignment;

    @OneToOne
    @JoinColumn(name = "stats_id")
    @Cascade(CascadeType.ALL)
    // TODO: make it individual Entity?
    private Stats stats;

    @ElementCollection
    @Cascade(CascadeType.ALL)
    // TODO: make it individual Entity?
    private Set<String> skills;
}
