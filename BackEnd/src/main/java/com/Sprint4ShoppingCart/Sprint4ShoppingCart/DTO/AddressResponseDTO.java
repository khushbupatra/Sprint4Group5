package com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO;


public class AddressResponseDTO
{
    private Integer addressId;
    private Integer userId;
    private String addressLane1;
    private String addressLane2;
    private String zipcode;
    private String state;
    private String country;
    private String addressType;
    private String contactName;
    private String contactPhoneNumber;


    public AddressResponseDTO(Integer addressId, Integer userId, String addressLane1, String addressLane2, String zipcode, String state, String country, String addressType, String contactName, String contactPhoneNumber) {
        this.addressId = addressId;
        this.userId = userId;
        this.addressLane1 = addressLane1;
        this.addressLane2 = addressLane2;
        this.zipcode = zipcode;
        this.state = state;
        this.country = country;
        this.addressType = addressType;
        this.contactName = contactName;
        this.contactPhoneNumber = contactPhoneNumber;
    }

    public AddressResponseDTO() {

    }

    public Integer getAddressId() {
        return addressId;
    }

    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getAddressLane1() {
        return addressLane1;
    }

    public void setAddressLane1(String addressLane1) {
        this.addressLane1 = addressLane1;
    }

    public String getAddressLane2() {
        return addressLane2;
    }

    public void setAddressLane2(String addressLane2) {
        this.addressLane2 = addressLane2;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAddressType() {
        return addressType;
    }

    public void setAddressType(String addressType) {
        this.addressType = addressType;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactPhoneNumber() {
        return contactPhoneNumber;
    }

    public void setContactPhoneNumber(String contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
    }
}
