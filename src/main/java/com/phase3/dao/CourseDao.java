package com.phase3.dao;

import com.phase3.model.Course;

import java.util.List;

/**
 * DAO class to manage {@link Course}
 */
public interface CourseDao {

  void init();

  /**
   * Method to find all groups
   *
   * @return a list of {@link Course}s
   */
  List<Course> getAllCourse();

  /**
   *
   * @param id - {@link Course#id}
   * @return
   */
  Course findById(long id);

  /**
   * Method to delete group
   *
   * @return list with remaining group, without {@link com.phase2.model.Student}s
   * @param id
   */
  void deleteCourse(long id);

  /**
   * Method to edit group
   *
   * @return edited {@link Course#id}
   */
  Course saveCourse(Course course);

  /**
   * Method to get groups ids with students
   *
   * @return ids of {@link Course#id}
   */
//  List<Long> teachersWithCourses();
}
