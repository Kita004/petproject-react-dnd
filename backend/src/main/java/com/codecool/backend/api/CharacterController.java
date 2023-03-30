package com.codecool.backend.api;

import com.codecool.backend.model.Character;
import com.codecool.backend.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {
    private CharacterService characterService;

    @Autowired
    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }


    @GetMapping
    public List<Character> getAllCharacters() {
        return characterService.getAllCharacters();
    }

    @GetMapping("/{id}")
    private Character getCharacterById(@PathVariable("id") Long id) {
        return characterService.getCharacterById(id);
    }

    @PostMapping
    public Character addCharacter(@RequestBody Character newCharacter) {
        return characterService.createCharacter(newCharacter);
    }

    @PutMapping("/{id}")
    public void updateCharacterById(@PathVariable("id") Long id, @RequestBody Character updatedCharacter) {
        characterService.updateCharacterById(id, updatedCharacter);
    }

    @DeleteMapping("/{id}")
    public void deleteCharacterById(@PathVariable("id") Long id) {
        characterService.deleteCharacterById(id);
    }
}
