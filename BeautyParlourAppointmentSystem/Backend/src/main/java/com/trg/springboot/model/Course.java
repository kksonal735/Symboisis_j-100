package com.trg.springboot.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
	@Table(name = "course")
	public class Course {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "course_id")
	    private int courseId;

	    @Column(name = "course_name")
	    private String courseName;

	    @Column(name = "duration")
	    private String duration;

	    @Column(name = "course_price")
	    private double coursePrice;

	    @ManyToMany(mappedBy = "courses")
	    private List<Client> clients;
	  
	    @OneToMany
	    private List<CourseBooking> booking;

		
	    public List<Client> getClients() {
	        return clients;
	    }

	    public void setClients(List<Client> clients) {
	        this.clients = clients;
	    }
	   
	    public List<CourseBooking> getBooking() {
			return booking;
		}

		public void setBooking(List<CourseBooking> booking) {
			this.booking = booking;
		}

		public int getCourseId() {
			return courseId;
		}

		public void setCourseId(int courseId) {
			this.courseId = courseId;
		}

		public String getCourseName() {
			return courseName;
		}

		public void setCourseName(String courseName) {
			this.courseName = courseName;
		}

		public String getDuration() {
			return duration;
		}

		public void setDuration(String duration) {
			this.duration = duration;
		}

		public double getCoursePrice() {
			return coursePrice;
		}

		public void setCoursePrice(double coursePrice) {
			this.coursePrice = coursePrice;
		}
		@Override
		public String toString() {
			return "Course [courseId=" + courseId + ", courseName=" + courseName + ", duration=" + duration
					+ ", coursePrice=" + coursePrice + ", clients=" + clients + ", booking=" + booking + "]";
		}
	}

