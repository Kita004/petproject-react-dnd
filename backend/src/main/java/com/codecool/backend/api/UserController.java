package com.codecool.backend.api;

import com.codecool.backend.model.User;
import com.codecool.backend.service.UserService;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return  userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public void addUser(@RequestBody User newUser) {
        userService.addUser(newUser);
    }

    @PutMapping("/{id}")
    public void updateUserById(@PathVariable("id") Long id, @RequestBody User updatedUser) {
        userService.updateUserById(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable("id") Long id) {
        userService.deleteUserById(id);
    }
}
