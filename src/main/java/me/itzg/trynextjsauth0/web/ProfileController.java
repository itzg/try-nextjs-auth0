package me.itzg.trynextjsauth0.web;

import me.itzg.trynextjsauth0.web.model.Profile;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProfileController {

  @GetMapping("me")
  public Profile getUser(Authentication authentication) {
    if (authentication.getPrincipal() instanceof Jwt) {
      final Jwt jwt = (Jwt) authentication.getPrincipal();

      return new Profile()
          .setUsername(authentication.getName())
          .setName(jwt.getClaimAsString("name"))
          .setEmail(jwt.getClaimAsString("email"))
          .setPicture(jwt.getClaimAsString("picture"));
    } else {
      throw new IllegalStateException(
          "Unexpected authentication object: " + authentication);
    }
  }
}
