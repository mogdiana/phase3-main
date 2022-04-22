package com.phase3.controller;

import com.phase3.dao.StudentDao;
import com.phase3.model.Student;

import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class StudentController {

    private StudentDao studentDao;

    public StudentController(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @ResponseBody
    @GetMapping("/students")
    public List<Student> list() {
        List<Student> students = studentDao.findAll();
        return students;
    }

    @RequestMapping(value = "/students", method = RequestMethod.PUT)
    @ResponseBody
    public String saveStudent(@RequestBody Student studentForm) {
        Student student = studentForm.getId() == 0 ? new Student() : studentDao.getStudentById(studentForm.getId());
        student.setFirstName(studentForm.getFirstName());
        student.setLastName(studentForm.getLastName());
        student.setDateOfBirth(studentForm.getDateOfBirth());
        student.setEmail(studentForm.getEmail());
        student.setGender(studentForm.getGender());
        studentDao.save(student);
        return "Student has been save successfully";
    }

    @RequestMapping(value = "/students/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteStudent(@PathVariable("id") Integer id) {
        studentDao.deleteStudent(id);
        return "Student has been deleted successfully.";
    }

//  @RequestMapping(value = "/students/search", method = RequestMethod.POST)
//  public String doSearchStudent(@ModelAttribute("studentSearchForm") StudentSearchForm studentSearchForm, Model model) {
//
//    model.addAttribute("students", studentService.searchStudent(studentSearchForm));
//    model.addAttribute("studentSearchForm", studentSearchForm);
//
//    Map<Long, String> groupItems = new HashMap<>();
//    for (Group group : groupDao.getAllGroups()) {
//      groupItems.put(group.getId(), group.getName());
//    }
//    model.addAttribute("groups", groupItems);
//    return "student-list";
//  }
//
//  @RequestMapping(value = "/save/image/{id}", method = RequestMethod.POST)
//  public String saveImage(@RequestParam("picture") MultipartFile picture, @PathVariable long id) throws IOException {
//
//    Student student = studentDao.getStudentById(id);
//    String fileName = StringUtils.cleanPath(picture.getOriginalFilename());
//    if (picture.getSize() <= 0) {
//      student.setPicture(null);
//
//    } else {
//      try {
//        byte[] bytes = picture.getBytes();
//        String base64Picture = Base64.getEncoder().encodeToString(bytes);
//        student.setPicture(base64Picture);
//      } catch (Exception throwables) {
//        throwables.printStackTrace();
//      }
//    }
//    studentDao.save(student);
//    return "redirect:/editStudent/" + student.getId();
//  }
//
//  public byte[] getByteArray(InputStream is) throws Exception {
//    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
//    BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(byteArrayOutputStream);
//
//    while (true) {
//      int i = is.read();
//      if (i == -1) {
//        break;
//      }
//      bufferedOutputStream.write(i);
//    }
//    bufferedOutputStream.flush();
//    bufferedOutputStream.close();
//    return byteArrayOutputStream.toByteArray();
//  }
}
