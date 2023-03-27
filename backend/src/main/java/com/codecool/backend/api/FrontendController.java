package com.codecool.backend.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class FrontendController {

    @GetMapping("character-sheet")
    public String characterSheet() {
        return "index.html";
    }

    @GetMapping("character-creation")
    public String characterCreation() {
        return "index.html";
    }
}
