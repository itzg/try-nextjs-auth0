package me.itzg.trynextjsauth0.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

/**
 * @author Geoff Bourne
 * @since Sep 2019
 */
@Configuration
public class WebSecurityConfig {

  @Bean
  public SecurityWebFilterChain springSecurityWebFilterChain(ServerHttpSecurity httpSecurity) {
    return httpSecurity
        .csrf().disable()
        .cors().disable()
        .authorizeExchange()
          .anyExchange().authenticated()
        .and()
        .oauth2ResourceServer()
          .jwt().and()
        .and().build();
  }
}
