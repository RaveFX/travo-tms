package com.Travo.Travobackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CrosConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        System.out.println("hhhhhhhhhhhhhh");
        registry.addMapping("/**")
                .allowedOrigins("http://127.0.0.1:5173")
                .allowedOrigins("http://127.0.0.1:5500")
                .allowedHeaders("*")
                .allowedMethods("*")
                .allowCredentials(true);
    }
}

