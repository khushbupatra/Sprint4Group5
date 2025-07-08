package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {

    @Id
    @GeneratedValue
    @Column(name = "cart_id")
    private Integer cartId;
    @Column(name = "user_id", unique = true, nullable = false)
    private Integer userId;
    @Column(name = "cart_total")
    private double cartTotal;
    @Column(name = "created_date")
    private LocalDateTime createdDate;
    @Column(name = "last_updated_date")
    private LocalDateTime lastUpdatedDate;

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "cart_id")
    private List<CartItem> cartItemList;


    public ShoppingCart() {
    }

    public ShoppingCart(Integer userId, double cartTotal, LocalDateTime createdDate, LocalDateTime lastUpdatedDate, List<CartItem> cartItemList) {
        this.userId = userId;
        this.cartTotal = cartTotal;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate;
        this.cartItemList = cartItemList;
    }

    public Integer getCartId() {
        return cartId;
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

    public List<CartItem> getCartItemList() {
        return cartItemList;
    }

    public void setCartItemList(List<CartItem> cartItemList) {
        this.cartItemList = cartItemList;
    }
}

