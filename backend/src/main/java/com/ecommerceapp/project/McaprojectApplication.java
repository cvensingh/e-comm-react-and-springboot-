package com.ecommerceapp.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication

@Configuration
public class McaprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(McaprojectApplication.class, args);
	}

}

