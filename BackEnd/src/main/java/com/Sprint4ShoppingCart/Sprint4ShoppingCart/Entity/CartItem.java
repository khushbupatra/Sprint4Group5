package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_items")
public class CartItem {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;
    @Column(name = "cart_id")
    private Integer cartId;
    @Column(name = "product_id", unique = true)
    private Integer productId;
    @Column(name = "sku")
    private String sku;
    @Column(name = "size")
    private String size;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "unit_price")
    private double unitPrice;
    @Column(name = "discount")
    private double discount;
    @Column(name = "final_price")
    private double finalPrice;
    @Column(name = "is_saved_for_later")
    private boolean isSavedForLater;

    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getFinalPrice() {
        return finalPrice;
    }

    public void setFinalPrice(double finalPrice) {
        this.finalPrice = finalPrice;
    }

    public boolean isSavedForLater() {
        return isSavedForLater;
    }

    public void setSavedForLater(boolean savedForLater) {
        isSavedForLater = savedForLater;
    }

    public CartItem(Integer productId, String sku, String size, int quantity, double unitPrice, double discount, double finalPrice, boolean isSavedForLater) {
        this.productId = productId;
        this.sku = sku;
        this.size = size;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.discount = discount;
        this.finalPrice = finalPrice;
        this.isSavedForLater = isSavedForLater;
    }

    public CartItem() {
    }
}

