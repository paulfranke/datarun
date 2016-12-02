package com.dbsystel.datarun.app;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;


@EnableWebSecurity
@Configuration
public class DataRunSecurityConfiguration extends WebSecurityConfigurerAdapter  {

    
    public void configure(WebSecurity web) throws Exception {
        web
            .ignoring()
                .antMatchers("/js/**","/css/**","/img/**","/webjars/**");
    }

    
    protected void configure(HttpSecurity http) throws Exception {
        http

        .authorizeRequests()
        	.antMatchers("**").permitAll()
//        	.antMatchers("/authenticate**").permitAll()
//        	.antMatchers("/login**").permitAll()
//        	.antMatchers("/resources/css/**").permitAll()
//        	.antMatchers("/community").authenticated()
//        	.antMatchers("/community/**").authenticated()
        	
        	
        .and()

	        .headers()
	        	.frameOptions().sameOrigin()
	        	
	     .and()
	     	.sessionManagement()
	     		.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
        
    
    }
 


}
