package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.CartItemRequestDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.CartItem;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.ShoppingCart;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Mapper.CartItemMapper;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Repository.CartItemRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CartItemService {

    private final CartItemRepository cartItemRepository;
    private final ShoppingCartService shoppingCartService;

    public CartItemService(CartItemRepository cartItemRepository, ShoppingCartService shoppingCartService) {
        this.cartItemRepository = cartItemRepository;
        this.shoppingCartService = shoppingCartService;
    }

    @Transactional
    public void addCartItem(Integer userId, CartItemRequestDTO cartItemRequestDTO) {
        ShoppingCart shoppingCart = shoppingCartService.getShoppingCartByUserID(userId);
        Integer cartId = shoppingCart.getCartId();
        CartItem cartItem = CartItemMapper.toCartItem(cartItemRequestDTO);
        cartItem.setCartId(cartId);
        cartItemRepository.save(cartItem);

        double previousTotal = shoppingCart.getCartTotal();
        double newTotal = (cartItem.getFinalPrice() * cartItem.getQuantity()) + previousTotal;
        shoppingCart.setCartTotal(newTotal);
        shoppingCart.setLastUpdatedDate(LocalDateTime.now());
        shoppingCartService.updateShoppingCart(shoppingCart);
    }

    @Transactional
    public void deleteCartItem(Integer userId,Integer productId){
        ShoppingCart shoppingCart = shoppingCartService.getShoppingCartByUserID(userId);
        CartItem cartItem = shoppingCart.getCartItemList().stream()
                .filter(item -> item.getProductId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("CartItem not found"));

        double previousTotal = shoppingCart.getCartTotal();
        double newTotal = previousTotal - (cartItem.getFinalPrice() * cartItem.getQuantity());
        shoppingCart.getCartItemList().remove(cartItem);
        shoppingCart.setCartTotal(newTotal);
        shoppingCart.setLastUpdatedDate(LocalDateTime.now());
        shoppingCartService.updateShoppingCart(shoppingCart);
    }

    @Transactional
    public void updateCartItem(Integer userId,Integer productId, CartItemRequestDTO cartItemRequestDTO){

        CartItem cartItem = shoppingCartService.getShoppingCartByUserID(userId).getCartItemList().stream()
                .filter(item -> item.getProductId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("CartItem not found"));

        double prevTotal = shoppingCartService.getShoppingCartByUserID(userId).getCartTotal()
                - (cartItem.getQuantity() * cartItem.getFinalPrice());

        CartItemMapper.updateCartItem(cartItemRequestDTO,cartItem);

        double newTotal =  prevTotal + (cartItem.getQuantity() * cartItem.getFinalPrice());
        ShoppingCart shoppingCart = shoppingCartService.getShoppingCartByUserID(userId);
        shoppingCart.setCartTotal(newTotal);
        shoppingCart.setLastUpdatedDate(LocalDateTime.now());
        shoppingCartService.updateShoppingCart(shoppingCart);


    }


}
