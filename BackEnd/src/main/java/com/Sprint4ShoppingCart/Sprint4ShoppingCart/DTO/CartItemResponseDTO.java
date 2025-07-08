package com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO;

public class CartItemResponseDTO {

    private Integer productId;
    private String sku;
    private String size;
    private Integer quantity;
    private double unitPrice;
    private double discount;
    private double finalPrice;
    private boolean isSavedForLater;

    public CartItemResponseDTO(Integer productId, String sku, String size, Integer quantity, double unitPrice, double discount, double finalPrice, boolean isSavedForLater) {
        this.productId = productId;
        this.sku = sku;
        this.size = size;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.discount = discount;
        this.finalPrice = finalPrice;
        this.isSavedForLater = isSavedForLater;
    }

    public double getFinalPrice() {
        return finalPrice;
    }

    public void setFinalPrice(double finalPrice) {
        this.finalPrice = finalPrice;
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

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
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


    public boolean isSavedForLater() {
        return isSavedForLater;
    }

    public void setSavedForLater(boolean savedForLater) {
        isSavedForLater = savedForLater;
    }

    public CartItemResponseDTO() {
    }
}
