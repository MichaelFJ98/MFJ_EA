package com.MichaelFJ.EA;

import com.MichaelFJ.EA.model.Enum.Role;
import com.MichaelFJ.EA.model.User;
import com.MichaelFJ.EA.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@SpringBootApplication
public class EaApplication  implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(EaApplication.class, args);
	}

	public void run(String... args){
		//Create default admin account
		User adminAccount = userRepository.findByRole(Role.Admin);
		if(adminAccount == null){
			User user = new User();

			user.setEmail("admin@gmail.com");
			user.setFirstName("admin");
			user.setLastName("admin");
			user.setRole(Role.Admin);
			user.setPassword(new BCryptPasswordEncoder().encode("admin"));
			userRepository.save(user);
		}
	}

}
