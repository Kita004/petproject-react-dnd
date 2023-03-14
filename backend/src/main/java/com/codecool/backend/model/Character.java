package com.codecool.backend.model;

import jakarta.persistence.*;

import java.util.Set;

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

    @ManyToOne
    @JoinColumn(name = "stats_id")
    // TODO: make it individual Entity?
    private Stats stats;

    @ElementCollection
    // TODO: make it individual Entity?
    private Set<String> skills;
}
