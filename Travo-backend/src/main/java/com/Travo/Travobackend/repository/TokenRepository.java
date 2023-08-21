package com.Travo.Travobackend.repository;

import com.Travo.Travobackend.model.entity.TokenDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface TokenRepository extends JpaRepository<TokenDTO, Integer> {

    @Query("SELECT t FROM TokenDTO t WHERE t.user.user_id = :userId")
    Optional<TokenDTO> findByUser_User_id(Integer userId);

    Optional<TokenDTO>findByToken(String token);

    @Query("""
        SELECT t
        FROM TokenDTO t
        INNER JOIN User u
        ON t.user.user_id = u.user_id
        WHERE u.user_id = :userId and (t.expired = false or t.revoked = false)
    """)
    List<TokenDTO> findAllValidTokenByUser(Integer userId);






}

