package com.MichaelFJ.EA.repository;

import com.MichaelFJ.EA.model.Role;
import com.MichaelFJ.EA.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);

    User findByRole(Role role);

}
