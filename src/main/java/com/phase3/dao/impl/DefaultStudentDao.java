package com.phase3.dao.impl;

import com.phase3.dao.GroupDao;
import com.phase3.dao.StudentDao;
import com.phase3.model.Student;
//import com.phase3.model.StudentSearchForm;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@Qualifier("student")
@Repository
public class DefaultStudentDao implements StudentDao {

  @PersistenceContext
  private EntityManager entityManager;
//  private StudentSearchForm studentSearchForm = new StudentSearchForm();
  private GroupDao groupDao;
  private Connection connection;

  public DefaultStudentDao() {
  }

  public DefaultStudentDao(Connection connection) {
    this.connection = connection;
  }

  @Override
  public void init() {
  }

  public List<Student> findAll() {
    return entityManager.createQuery("SELECT DISTINCT s FROM Student s", Student.class)
        .getResultList();
  }

  public Student getStudentById(long id) {
    return entityManager.createQuery("from Student s where s.id = :id", Student.class)
        .setParameter("id", id).getSingleResult();
  }

  @Transactional
  public Student save(Student student) {
    if (student.getId() == 0) {
      entityManager.persist(student);
    } else {
      student = entityManager.merge(student);
    }
    return student;
  }

  @Transactional
  public void deleteStudent(long id) {
    entityManager.remove(getStudentById(id));
  }

//  @Transactional
//  public List<Student> findStudent(StudentSearchForm studentSearchForm) {
//    CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//    CriteriaQuery<Student> query = cb.createQuery(Student.class);
//    Root<Student> root = query.from(Student.class);
//
//    List<Predicate> predicates = new ArrayList<>();
//    if(studentSearchForm.getFullName() != null && !("".equals(studentSearchForm.getFullName()))){
//      Predicate first = cb.like(cb.upper(root.get("firstName")), studentSearchForm.getFullName().toUpperCase());
//      Predicate last = cb.like(cb.upper(root.get("lastName")), studentSearchForm.getFullName().toUpperCase());
//      predicates.add(cb.or(first, last));
//    }
//
//    if(studentSearchForm.getGender() != 'A') {    predicates.add(cb.equal(root.get("gender"), studentSearchForm.getGender()));}
//    if(studentSearchForm.getFullAddress() != null  && !("".equals(studentSearchForm.getFullAddress()))) {
//      Predicate country = cb.like(cb.upper(root.get("address").get("country")), studentSearchForm.getFullAddress().toUpperCase());
//      Predicate city = cb.like(cb.upper(root.get("address").get("city")), studentSearchForm.getFullAddress().toUpperCase());
//      Predicate street = cb.like(cb.upper(root.get("address").get("street")), studentSearchForm.getFullAddress().toUpperCase());
//      predicates.add(cb.or(country, city, street));
//    }
//    if(studentSearchForm.getStartDate() != null && studentSearchForm.getEndDate() == null) {
//      predicates.add(cb.greaterThanOrEqualTo(root.get("dateOfBirth"), studentSearchForm.getStartDate()));    }
//    if(studentSearchForm.getEndDate() != null && studentSearchForm.getStartDate() == null) {
//      predicates.add(cb.lessThanOrEqualTo(root.get("dateOfBirth"), studentSearchForm.getEndDate()));    }
//    if(studentSearchForm.getStartDate() != null && studentSearchForm.getEndDate() != null) {
//      predicates.add(cb.between(root.get("dateOfBirth"), studentSearchForm.getStartDate(), studentSearchForm.getEndDate()));    }
//    if(studentSearchForm.getGroup() != null ) {
//      predicates.add(cb.equal(root.get("group"), studentSearchForm.getGroup()));    }
//
//    query.select(root).where(cb.and(predicates.toArray(new Predicate[0])));
//
//    return entityManager.createQuery(query).getResultList();
//  }


}