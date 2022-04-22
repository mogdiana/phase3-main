package com.phase3.dao.impl;

import com.phase3.dao.TeacherDao;
import com.phase3.model.Teacher;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Qualifier("teacher")
@Repository
public class DefaultTeacherDao implements TeacherDao {

  @PersistenceContext
  private EntityManager entityManager;

  @Override
  public void init() {
  }

  public List<Teacher> findAll() {
    return entityManager.createQuery("SELECT DISTINCT t FROM Teacher t order by t.id asc", Teacher.class).getResultList();
  }

  public Teacher getTeacherById(long id) {
    return entityManager.createQuery("from Teacher t where t.id = :id", Teacher.class)
        .setParameter("id", id).getSingleResult();
  }

  @Transactional
  public Teacher save(Teacher teacher) {
    if (teacher.getId() == 0) {
      entityManager.persist(teacher);
    } else {
      teacher = entityManager.merge(teacher);
    }
    return teacher;
  }

  @Transactional
  public void delete(long id) {
    entityManager.remove(getTeacherById(id));
  }

}