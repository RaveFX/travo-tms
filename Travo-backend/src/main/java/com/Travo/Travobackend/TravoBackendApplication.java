package com.Travo.Travobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TravoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravoBackendApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer CorsConfig() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings( @NonNull CorsRegistry registry ) {
				registry.addMapping("/**")
						.allowedOrigins("http://127.0.0.1:5173")
						.allowedHeaders("*")
						.allowedMethods("*")
						.allowCredentials(true);
			}
		};
	}

}