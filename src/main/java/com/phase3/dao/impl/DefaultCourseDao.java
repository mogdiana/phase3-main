package com.phase3.dao.impl;

import com.phase3.dao.CourseDao;
import com.phase3.model.Course;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Qualifier("course")
@Repository
public class DefaultCourseDao implements CourseDao {

  @PersistenceContext
  private EntityManager entityManager;

  @Override
  public void init() {  }

  public List<Course> getAllCourse() {
    return entityManager.createQuery("SELECT DISTINCT c FROM Course c order by c.id desc", Course.class).getResultList();
  }

  public Course findById(long id) {
    return entityManager.createQuery("FROM Course c where c.id = :id", Course.class).setParameter("id", id).getSingleResult();
  }

  @Transactional
  public Course saveCourse(Course course) {
    if (course.getId() == 0) {
      entityManager.persist(course);
      entityManager.flush();
      return course;    }
    else {
      return entityManager.merge(course);    }
  }

//  @Override
//  public List<Long> teachersWithCourses() {
//    Query q = entityManager.createQuery("SELECT id FROM Course c WHERE NOT EXISTS (SELECT 1 FROM Teacher t WHERE t.id = c.teacher_id)");
//    List<Long> ids = q.getResultList();
//    return ids;
//  }

  @Transactional
  public void deleteCourse(long id) {
    entityManager.remove(findById(id));
  }

}
