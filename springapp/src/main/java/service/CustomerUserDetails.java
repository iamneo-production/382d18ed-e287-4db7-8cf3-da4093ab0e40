package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import org.springframework.security.core.userdetails.UserDetailsService;
import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
 
public class CustomerUserDetails implements UserDetails {
 
    private UserModel user;
     
    public CustomerUserDetails(UserModel user) {
        super();
        this.user = user;
    }
 
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("EMAILID"));
    
    }
 
    @Override
    public String getPassword() {
		return user.getpassword();
	}
   /* public String getpassword() {
        return user.getpassword();
    }*/
 
    //@Override
    public String getEmailId() {
		return user.getEmailId();
	}
    
 
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
 
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
 
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
 
    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public String getUsername() {
        return user.getusername();
    }
 
}
