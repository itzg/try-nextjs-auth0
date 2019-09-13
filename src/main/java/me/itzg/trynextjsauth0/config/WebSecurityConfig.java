package me.itzg.trynextjsauth0.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import reactor.core.publisher.Mono;

@Configuration
@Slf4j
public class WebSecurityConfig {

  @Bean
  public SecurityWebFilterChain springSecurityWebFilterChain(ServerHttpSecurity httpSecurity) {
    return httpSecurity
        .csrf().disable()
        .authorizeExchange()
          .anyExchange().authenticated()
        .and()
        .oauth2ResourceServer()
          .jwt().and()
        .and().build();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    // Declare a default "allow all" CORS configuration

    final CorsConfiguration corsConfiguration = new CorsConfiguration()
        .applyPermitDefaultValues();

    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfiguration);

    return source;
  }

  @Bean
  public ReactiveUserDetailsService userDetailsService() {
    // "disable" the default Spring Boot auto config of creating an in-memory user with a random password
    // ...user details are not used with OAuth2 resource servers anyway
    return username -> Mono.empty();
  }
}
