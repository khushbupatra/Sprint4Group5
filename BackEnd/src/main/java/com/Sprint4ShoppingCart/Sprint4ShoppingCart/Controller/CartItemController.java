package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Controller;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.CartItemRequestDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.CartItemResponseDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service.CartItemService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/{user-id}/cart-items")
public class CartItemController {

    private CartItemService cartItemService;

    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @PostMapping
    public void addCartItem(
            @PathVariable("user-id") Integer userId,
            @RequestBody CartItemRequestDTO cartItemRequestDTO
    ){
        cartItemService.addCartItem(userId, cartItemRequestDTO);
    }

    @DeleteMapping("/{product-id}")
    public void deleteCartItem(
            @PathVariable("user-id") Integer userId,
            @PathVariable("product-id") Integer productId
    ){
        cartItemService.deleteCartItem(userId,productId);
    }

    @PutMapping("/{product-id}")
    public void updateCartItem(
            @PathVariable("user-id") Integer userId,
            @PathVariable("product-id") Integer productId,
            @RequestBody CartItemRequestDTO cartItemRequestDTO
    ){
        cartItemService.updateCartItem(userId,productId,cartItemRequestDTO);
    }


}


