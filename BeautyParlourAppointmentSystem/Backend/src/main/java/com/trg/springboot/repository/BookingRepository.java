package com.trg.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trg.springboot.model.CourseBooking;
@Repository
public interface BookingRepository extends JpaRepository<CourseBooking, Integer>{
	
}
