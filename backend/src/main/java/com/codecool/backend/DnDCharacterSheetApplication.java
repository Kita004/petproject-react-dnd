package com.codecool.backend;

import com.codecool.backend.model.Character;
import com.codecool.backend.model.Stats;
import com.codecool.backend.model.User;
import com.codecool.backend.service.CharacterService;
import com.codecool.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Set;

@SpringBootApplication
public class DnDCharacterSheetApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DnDCharacterSheetApplication.class, args);
	}

	@Autowired
	private UserService userService;
	@Autowired
	private CharacterService characterService;

	@Override
	public void run(String... args) throws Exception {
		User user1 = new User();
		user1.setId(1L);
		user1.setName("TestUser");

		Stats stats1 = new Stats();
		stats1.setId(1L);
		stats1.setStrength(8);
		stats1.setDexterity(10);
		stats1.setConstitution(12);
		stats1.setIntelligence(13);
		stats1.setWisdom(14);
		stats1.setCharisma(15);

		Character char1 = new Character();
		char1.setId(1L);
		char1.setName("Cody the Cool");
		char1.setLevel(1);
		char1.setCharClass("wizard");
		char1.setRace("human");
		char1.setBackground("acolyte");
		char1.setAlignment("chaotic-evil");
		char1.setStats(stats1);

		user1.setCharacters(Set.of(char1));

		userService.createUser(user1);
	}
}
