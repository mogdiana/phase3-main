package com.phase3.dao.impl;

import com.phase3.dao.GroupDao;
import com.phase3.model.Group;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Qualifier("group")
@Repository
public class DefaultGroupDao implements GroupDao {

  @PersistenceContext
  private EntityManager entityManager;

  @Override
  public void init() {
  }

  public List<Group> getAllGroups() {
    return entityManager.createQuery("FROM Group order by id desc", Group.class).getResultList();
  }

  public Group findById(long id) {
    return entityManager.createQuery("FROM Group g where g.id = :id", Group.class)
        .setParameter("id", id).getSingleResult();
  }

  @Transactional
  public Group saveGroup(Group group) {
    if (group.id == 0) {
      entityManager.persist(group);
      return group;
    } else {
      return entityManager.merge(group);
    }
  }

  @Override
  public List<Long> groupsWithStudents() {
    Query q = entityManager.createQuery("SELECT id FROM Group g WHERE NOT EXISTS (SELECT 1 FROM Student s WHERE s.group = g.id)");
    List<Long> ids = q.getResultList();
    return ids;
  }

  @Transactional
  public void deleteGroup(long id) {
    entityManager.remove(findById(id));
  }

  @Override
  public Group findByName(Group group) {
    Group groupFind = null;
    try {
      groupFind = entityManager.createQuery("select g from Group g where g.name = :name", Group.class)
          .setParameter("name", group.getName())
          .getSingleResult();
    } catch (Exception e) {
    }
    return groupFind;
  }

}
