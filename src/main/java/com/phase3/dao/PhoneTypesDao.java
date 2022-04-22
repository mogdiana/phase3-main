package com.phase3.dao;


import com.phase3.model.PhoneType;

import java.util.List;

public interface PhoneTypesDao {

  PhoneType getPhoneTypeById(int id);

  List<PhoneType> getAllPhoneTypes();
}
