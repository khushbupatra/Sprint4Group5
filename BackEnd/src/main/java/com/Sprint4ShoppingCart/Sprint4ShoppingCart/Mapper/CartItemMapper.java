package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Mapper;

import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.CartItemRequestDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.CartItemResponseDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.CartItem;

public class CartItemMapper {


    public static CartItemResponseDTO toCartItemDTO(CartItem cartItem){
        CartItemResponseDTO cartItemResponseDTO = new CartItemResponseDTO();
        cartItemResponseDTO.setDiscount(cartItem.getDiscount());
        cartItemResponseDTO.setSize(cartItem.getSize());
        cartItemResponseDTO.setSku(cartItem.getSku());
        cartItemResponseDTO.setSavedForLater(cartItem.isSavedForLater());
        cartItemResponseDTO.setUnitPrice(cartItem.getUnitPrice());
        cartItemResponseDTO.setQuantity(cartItem.getQuantity());
        cartItemResponseDTO.setProductId(cartItem.getProductId());
        cartItemResponseDTO.setFinalPrice(cartItem.getFinalPrice());

        return cartItemResponseDTO;
    }

    public static CartItem toCartItem(CartItemRequestDTO cartItemRequestDTO) {
        CartItem cartItem = new CartItem();
        cartItem.setDiscount(cartItemRequestDTO.getDiscount());
        cartItem.setSize(cartItemRequestDTO.getSize());
        cartItem.setSku(cartItemRequestDTO.getSku());
        cartItem.setSavedForLater(cartItemRequestDTO.isSavedForLater());
        cartItem.setUnitPrice(cartItemRequestDTO.getUnitPrice());
        cartItem.setQuantity(cartItemRequestDTO.getQuantity());
        cartItem.setProductId(cartItemRequestDTO.getProductId());
        double cartItemFinalPrice = cartItemRequestDTO.getUnitPrice() -cartItemRequestDTO.getDiscount();
        cartItem.setFinalPrice(cartItemFinalPrice);
        return cartItem;
    }

    public static void updateCartItem(CartItemRequestDTO cartItemRequestDTO , CartItem cartItem){
        cartItem.setDiscount(cartItemRequestDTO.getDiscount());
        cartItem.setSize(cartItemRequestDTO.getSize());
        cartItem.setSku(cartItemRequestDTO.getSku());
        cartItem.setSavedForLater(cartItemRequestDTO.isSavedForLater());
        cartItem.setUnitPrice(cartItemRequestDTO.getUnitPrice());
        cartItem.setQuantity(cartItemRequestDTO.getQuantity());
        cartItem.setProductId(cartItemRequestDTO.getProductId());
        double cartItemFinalPrice = cartItemRequestDTO.getUnitPrice() -cartItemRequestDTO.getDiscount();
        cartItem.setFinalPrice(cartItemFinalPrice);

    }

}
