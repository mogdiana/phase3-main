package com.phase3.controller;

import com.phase3.dao.GroupDao;
import com.phase3.dao.impl.DefaultGroupDao;
import com.phase3.model.Group;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;
import org.springframework.web.bind.annotation.*;


@RestController
public class GroupController {
  private GroupDao groupDao;

  public GroupController(GroupDao groupDao) {
    this.groupDao = groupDao;
  }

  @GetMapping("/groups")
  public List<Group> listGroups() {
    return groupDao.getAllGroups();
  }

  @RequestMapping(value = "/groups", method = RequestMethod.PUT)
  @ResponseBody
  public String saveGroup(@RequestBody Group groupForm) {
    Group group = groupForm.getId() == 0 ? new Group() : groupDao.findById(groupForm.getId());
    group.setName(groupForm.getName());
    Group findGroup = groupDao.findByName(group);
    if (findGroup == null) {
      groupDao.saveGroup(group);
      return "Group has been save successfully.";
    } else {
      return "Group has been exists";
    }
  }

  @RequestMapping(value = "/groups/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public String deleteGroup(@RequestBody Group group, @PathVariable("id") Integer id) {
    groupDao.deleteGroup(id);
    return "Delete";
  }

}