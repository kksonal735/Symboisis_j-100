package com.trg.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trg.springboot.model.Course;
@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
}
