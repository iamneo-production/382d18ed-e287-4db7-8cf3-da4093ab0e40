package com.examly.springapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.data.jpa.repository.config.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.Bean;

@Configuration
@ComponentScan
@EnableAutoConfiguration
//@EntityScan //("com.examly.springapp.model") // path of the entity model
//@EnableJpaRepositories //("com.examly.springapp.controller") // path of jpa repository 
@SpringBootApplication
public class SpringappApplication {


	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

}