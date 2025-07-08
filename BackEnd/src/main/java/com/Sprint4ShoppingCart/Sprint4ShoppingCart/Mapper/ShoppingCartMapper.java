package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Mapper;

import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.ShoppingCartDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.ShoppingCart;

import java.util.stream.Collectors;

public class ShoppingCartMapper {


    public static ShoppingCartDTO toShoppingCartDTO(ShoppingCart shoppingCart){

        ShoppingCartDTO shoppingCartDTO = new ShoppingCartDTO();
        shoppingCartDTO.setUserId(shoppingCart.getUserId());
        shoppingCartDTO.setCartTotal(shoppingCart.getCartTotal());
        shoppingCartDTO.setCreatedDate(shoppingCart.getCreatedDate());
        shoppingCartDTO.setLastUpdatedDate(shoppingCart.getLastUpdatedDate());
        shoppingCartDTO.setCartItemDTOList(
                shoppingCart.getCartItemList().stream()
                        .map(CartItemMapper::toCartItemDTO)
                        .collect(Collectors.toList())
        );
        return shoppingCartDTO;
    }

    public static ShoppingCart toShoppingCart(ShoppingCartDTO shoppingCartDTO) {
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUserId(shoppingCartDTO.getUserId());
        shoppingCart.setCartTotal(shoppingCartDTO.getCartTotal());
        shoppingCart.setCreatedDate(shoppingCartDTO.getCreatedDate());
        shoppingCart.setLastUpdatedDate(shoppingCartDTO.getLastUpdatedDate());
        return shoppingCart;
    }


}
