package com.phase3.dao;

import com.phase3.model.Address;

import java.util.List;

public interface AddressDao {

  void init();

  /**
   * Method to find all students
   *
   * @return a list of {@link Address}s
   */
  List<Address> getAllAddresses();

  /**
   *
   * @param id - {@link Address#id}
   * @return
   */
  Address getAddressById(Long id);

  /**
   * Method to create address
   *
   * @return
   */
  Address addAddress(Address address);

  Address updateAddress(Address address);

  /**
   * Method to delete address
   * @param id - {@link Address#id}
   */
  void deleteAddress(long id);
}
