package com.examly.springapp.controller;
import com.examly.springapp.repository.UserModelRepository;
import javax.security.auth.spi.LoginModule;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserDetail;

import com.examly.springapp.model.AdminModel;


import javax.sql.DataSource;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
 
@Configuration
@EnableWebSecurity
public class AuthController extends WebSecurityConfigurerAdapter {
    
    @Autowired
    private UserDetailsService data;
    @Autowired
    private UserModelRepository auth;

    @PostMapping("/signup")
	public UserModel saveUser(@RequestBody UserModel user) {
		  return auth.save(user);
          
	}

     
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
         
        return authProvider;
    }
 
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

}