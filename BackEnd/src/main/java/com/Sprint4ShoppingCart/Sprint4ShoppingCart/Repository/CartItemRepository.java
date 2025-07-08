package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Repository;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

}
