package com.codecool.backend.service;

import com.codecool.backend.model.Character;
import com.codecool.backend.model.User;
import com.codecool.backend.repository.CharacterRepository;
import com.codecool.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRep;
    private final CharacterRepository characterRep;

    @Autowired
    public UserService(UserRepository userRepository, CharacterRepository characterRep) {
        this.userRep = userRepository;
        this.characterRep = characterRep;
    }


    private boolean checkIfUserExists(Long id) {
        return userRep.existsById(id);
    }

    public List<User> getAllUsers() { return userRep.findAll(); }

    public User getUserById(Long id) {
        if (!checkIfUserExists(id)) {
            throw new EntityNotFoundException("User not found with ID: " + id);
        }
        return userRep.getReferenceById(id);
    }

    public User createUser(User user) {
        return userRep.save(user);
    }

    public void updateUserById(Long id, User updatedUser) {
        if (!checkIfUserExists(id)) {
            throw new EntityNotFoundException("User not found with ID: " + id);
        }
        updatedUser.setId(id);
        userRep.save(updatedUser);
    }

    public void deleteUserById(Long id) {
        if (!checkIfUserExists(id)) {
            throw new EntityNotFoundException("User not found with ID: " + id);
        }
        userRep.deleteById(id);
    }
}
