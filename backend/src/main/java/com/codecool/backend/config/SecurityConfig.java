//package com.codecool.backend.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    SecurityFilterChain securityFilterChain(HttpSecurity httpS) throws Exception {
//        return httpS
//                .csrf().disable()
//                .cors().disable()
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/h2-console/**").permitAll()
//                        .requestMatchers("/").permitAll()
//                        .anyRequest().authenticated()
//                )
//                .build();
//    }
//}
