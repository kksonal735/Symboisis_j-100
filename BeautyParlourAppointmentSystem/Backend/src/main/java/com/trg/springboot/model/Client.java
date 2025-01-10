
package com.trg.springboot.model;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name="client")
public class Client {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Integer clientId;  
    private String clientName;
    private long clientMobileno;
    private String clientPassword;
    private String clientRole;
    private String clientEmail;

    @ManyToMany
    @JoinTable(
        name = "client_course",
        joinColumns = @JoinColumn(name = "client_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses; 

    @OneToMany  
    private List<CourseBooking> booking;

	public long getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public long getClientMobileno() {
		return clientMobileno;
	}

	public void setClientMobileno(long clientMobileno) {
		this.clientMobileno = clientMobileno;
	}

	public String getClientPassword() {
		return clientPassword;
	}

	public void setClientPassword(String clientPassword) {
		this.clientPassword = clientPassword;
	}

	public String getClientRole() {
		return clientRole;
	}

	public void setClientRole(String clientRole) {
		this.clientRole = clientRole;
	}

	public String getClientEmail() {
		return clientEmail;
	}

	public void setClientEmail(String clientEmail) {
		this.clientEmail = clientEmail;
	}

	public List<Course> getCourses() {
		return courses;
	}

	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}

	public List<CourseBooking> getBooking() {
		return booking;
	}

	public void setBooking(List<CourseBooking> booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		return "Client [clientId=" + clientId + ", clientName=" + clientName + ", clientMobileno=" + clientMobileno
				+ ", clientPassword=" + clientPassword + ", clientRole=" + clientRole + ", clientEmail=" + clientEmail
				+ ", courses=" + courses + ", booking=" + booking + "]";
	}

}
