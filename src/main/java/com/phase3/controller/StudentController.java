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
        Student student = studentForm.getId() == null ? new Student() : studentDao.getStudentById(studentForm.getId());
        student.setFirstName(studentForm.getFirstName());
        student.setLastName(studentForm.getLastName());
        student.setDateOfBirth(studentForm.getDateOfBirth());
        student.setEmail(studentForm.getEmail());
        student.setGender(studentForm.getGender());
        studentDao.save(student);
        return "Student has been save successfully";
    }

//  @GetMapping("/editStudent/{id}")
//  public String loadStudentById(@PathVariable long id, Model model) {
//    model.addAttribute("student", studentDao.getStudentById(id));
//
//    Map<Long, String> groupItems = new HashMap<>();
//    for (Group group : groupDao.getAllGroups()) {
//      groupItems.put(group.getId(), group.getName());
//    }
//    model.addAttribute("groupItems", groupItems);
//
//    Map<String, String> selectedStatus = new HashMap<String, String>();
//    selectedStatus.put(null, "NONE");
//    selectedStatus.put("Active", "Active");
//    selectedStatus.put("Suspended", "Suspended");
//    model.addAttribute("selectedStatus", selectedStatus);
//
//    List<Phone> phones = phoneDao.getAllPhones();
//    model.addAttribute("phones", phones);
//
//    List<PhoneType> phoneTypes = phoneTypesDao.getAllPhoneTypes();
//    model.addAttribute("phoneTypes", phoneTypes);
//
//    return "student-edit";
//  }
//
//  @RequestMapping(value = "/save", method = RequestMethod.POST)
//  public ModelAndView submitStudent(@ModelAttribute("student") Student student) {
//
//    studentService.saveStudent(student);
//    return new ModelAndView("redirect:/students");
//  }
//
//  @RequestMapping(value = "/deleteStudent", method = RequestMethod.POST)
//  public String deleteStudent(long[] ids) {
//    for (long id : ids) {
//      studentDao.deleteStudent(id);
//    }
//    return "redirect:/students";
//  }
//
//  @RequestMapping(value = "/new", method = RequestMethod.GET)
//  public String createStudent(Model model) {
//    Student student = new Student();
//    model.addAttribute("student", student);
//
//    Map<Long, String> groupItems = new HashMap<>();
//    for (Group group : groupDao.getAllGroups()) {
//      groupItems.put(group.getId(), group.getName());
//    }
//    model.addAttribute("groupItems", groupItems);
//
//    Map<Integer, String> phoneTypeItems = new HashMap<>();
//    for(PhoneType phoneType : phoneTypesDao.getAllPhoneTypes()) {
//      phoneTypeItems.put(phoneType.getId(), phoneType.getName());
//    }
//
//    return "student-edit";
//  }
//
//
//
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
//
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
