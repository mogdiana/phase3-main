package com.phase3.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name="Group")
@Table(schema = "public", name = "groups")
public class Group {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  public long id;

  @Column(name = "name")
  public String name;

  public long getId() {   return id;  }

  public void setId(long id) {    this.id = id;  }

  public String getName() {
    return name;
  }

  public void setName(String name) {    this.name = name;  }
}