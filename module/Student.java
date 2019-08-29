package com.example.studentApplication.module;

public class Student {

	private int id;
	private String firstName;
	private String lastName;
	private String address;
	
	public Student(){}

	public Student(int id, String firstName, String lastName, String address) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
	}

	private int getId() {
		return id;
	}

	private void setId(int id) {
		this.id = id;
	}

	private String getFirstName() {
		return firstName;
	}

	private void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	private String getLastName() {
		return lastName;
	}

	private void setLastName(String lastName) {
		this.lastName = lastName;
	}

	private String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
}
