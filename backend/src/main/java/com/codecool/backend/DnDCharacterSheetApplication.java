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

import java.util.HashSet;
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
//		stats1.setId(1L);
		stats1.setStrength(8);
		stats1.setDexterity(10);
		stats1.setConstitution(12);
		stats1.setIntelligence(13);
		stats1.setWisdom(14);
		stats1.setCharisma(15);

		Character char1 = new Character();
		char1.setId(1L);
		char1.setName("Cody the Cool");
		char1.setLevel(20);
		char1.setCharClass("wizard");
		char1.setRace("human");
		char1.setBackground("acolyte");
		char1.setAlignment("chaotic-evil");
		char1.setStats(stats1);

		Stats stats2 = new Stats();
//		stats2.setId(2L);
		stats2.setStrength(20);
		stats2.setDexterity(20);
		stats2.setConstitution(20);
		stats2.setIntelligence(20);
		stats2.setWisdom(20);
		stats2.setCharisma(20);

		Character char2 = new Character();
		char2.setId(2L);
		char2.setName("Test Dude");
		char2.setLevel(1);
		char2.setCharClass("barbarian");
		char2.setRace("dragonborn");
		char2.setBackground("acolyte");
		char2.setAlignment("lawful-good");
		char2.setStats(stats2);

		Set<Character> chars = new HashSet<>();
		chars.add(char1);
		chars.add(char2);

		user1.setCharacters(chars);

		userService.addUser(user1);
	}
}
