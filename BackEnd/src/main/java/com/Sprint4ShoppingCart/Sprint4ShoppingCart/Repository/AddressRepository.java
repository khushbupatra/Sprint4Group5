package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Repository;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

    Address findByUserIdAndAddressId(Integer userId, Integer addressId);
    void deleteByUserIdAndAddressId(Integer userId, Integer addressId);
}
