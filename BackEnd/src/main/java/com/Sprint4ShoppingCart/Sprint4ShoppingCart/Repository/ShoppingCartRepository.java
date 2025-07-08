package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Repository;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Integer> {

    ShoppingCart findByUserId(Integer userId);

}
