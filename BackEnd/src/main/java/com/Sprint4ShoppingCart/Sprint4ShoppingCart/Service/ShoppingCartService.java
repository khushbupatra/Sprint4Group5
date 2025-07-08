package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service;

import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.ShoppingCart;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Repository.ShoppingCartRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;

    public ShoppingCartService(ShoppingCartRepository shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }


    public void updateShoppingCart(ShoppingCart shoppingCart){
        shoppingCartRepository.save(shoppingCart);
    }

    public ShoppingCart getShoppingCartByUserID(Integer userId){
        ShoppingCart cart =  shoppingCartRepository.findByUserId(userId);
        if(cart == null){
            cart = new ShoppingCart();
            cart.setCartTotal(0);
            cart.setUserId(userId);
            cart.setCreatedDate(LocalDateTime.now());
            cart.setLastUpdatedDate(LocalDateTime.now());
            shoppingCartRepository.save(cart);
            return cart;
        }else{
            return cart;
        }
    }


}
