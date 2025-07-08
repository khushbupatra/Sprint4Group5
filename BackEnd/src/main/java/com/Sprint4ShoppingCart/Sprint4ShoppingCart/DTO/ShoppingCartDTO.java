package com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class ShoppingCartDTO {

    private Integer userId;
    private double cartTotal;
    private LocalDateTime createdDate;
    private LocalDateTime lastUpdatedDate;
    private List<CartItemResponseDTO> cartItemResponseDTOList;

    public ShoppingCartDTO(Integer userId, double cartTotal, LocalDateTime createdDate, LocalDateTime lastUpdatedDate, List<CartItemResponseDTO> cartItemResponseDTOList) {
        this.userId = userId;
        this.cartTotal = cartTotal;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate;
        this.cartItemResponseDTOList = cartItemResponseDTOList;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public double getCartTotal() {
        return cartTotal;
    }

    public void setCartTotal(double cartTotal) {
        this.cartTotal = cartTotal;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getLastUpdatedDate() {
        return lastUpdatedDate;
    }

    public void setLastUpdatedDate(LocalDateTime lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
    }

    public List<CartItemResponseDTO> getCartItemDTOList() {
        return cartItemResponseDTOList;
    }

    public void setCartItemDTOList(List<CartItemResponseDTO> cartItemResponseDTOList) {
        this.cartItemResponseDTOList = cartItemResponseDTOList;
    }

    public ShoppingCartDTO() {
    }
}
