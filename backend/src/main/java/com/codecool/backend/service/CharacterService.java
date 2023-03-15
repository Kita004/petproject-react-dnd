package com.codecool.backend.service;

import com.codecool.backend.model.Character;
import com.codecool.backend.repository.CharacterRepository;
import com.codecool.backend.repository.StatsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
    private final CharacterRepository characterRep;
    private final StatsRepository statsRep;

    @Autowired
    public CharacterService(CharacterRepository characterRepository, StatsRepository statsRepository) {
        this.characterRep = characterRepository;
        this.statsRep = statsRepository;
    }


    private boolean checkIfCharacterExists(Long id) {
        return characterRep.existsById(id);
    }

    public List<Character> getAllCharacters() {
        return characterRep.findAll();
    }

    public Character getCharacterById(Long id) {
        if(checkIfCharacterExists(id)) {
            throw new EntityNotFoundException("Character not found with ID: " + id);
        }
        return characterRep.getReferenceById(id);
    }

    public Character createCharacter(Character character) {
        return characterRep.save(character);
    }

    public void updateCharacterById(Long id, Character newCharacter) {
        if(checkIfCharacterExists(id)) {
            throw new EntityNotFoundException("Character not found with ID: " + id);
        }
        newCharacter.setId(id);
        characterRep.save(newCharacter);
    }

    public void deleteCharacterById(Long id) {
        if(checkIfCharacterExists(id)) {
            throw new EntityNotFoundException("Character not found with ID: " + id);
        }
        characterRep.deleteById(id);
    }
}
