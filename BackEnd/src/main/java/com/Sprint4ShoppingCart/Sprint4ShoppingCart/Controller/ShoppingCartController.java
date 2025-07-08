package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Controller;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.ShoppingCartDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.ShoppingCart;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Mapper.ShoppingCartMapper;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service.CartItemService;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service.ShoppingCartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users/{user-id}/cart")
public class ShoppingCartController {

    private ShoppingCartService shoppingCartService;

    public ShoppingCartController(CartItemService cartItemService, ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @GetMapping
    public ShoppingCartDTO getShoppingCart(
            @PathVariable("user-id") Integer id
            ){
        ShoppingCart cart =  shoppingCartService.getShoppingCartByUserID(id);
        return ShoppingCartMapper.toShoppingCartDTO(cart);
    }


}
