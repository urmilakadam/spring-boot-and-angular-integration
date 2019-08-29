package com.example.studentApplication.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentApplication.module.Student;

@RestController
@RequestMapping("/api")
public class StudentController {
	
	Student student;
	
	@GetMapping("/getdata")
	public Map<Object,Object> getdata(){
		Map<Object,Object> map=new HashMap<Object,Object>();
		map.put("name","urmila kadam");
		return map;
	}
	
	@GetMapping("/getinfo")
	public Map<Object,Object> getInfo(){
		Map<Object,Object> map=new HashMap<Object,Object>();
		map.put("Info","The champ");
		return map;
	}
	
}
