package com.bezkoder.spring.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.login.models.suggModel;

@Repository
public interface suggRepo extends JpaRepository<suggModel, Long> {
  Optional<suggModel> findByName(String name);
}