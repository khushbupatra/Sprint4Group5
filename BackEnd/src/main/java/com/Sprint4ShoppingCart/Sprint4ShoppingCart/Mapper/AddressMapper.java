package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Mapper;

import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.AddressRequestDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.AddressResponseDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.Address;


public class AddressMapper {

    public static AddressResponseDTO toAddressDTO(Address address){

        AddressResponseDTO addressResponseDTO = new AddressResponseDTO();
        addressResponseDTO.setAddressId(address.getAddressId());
        addressResponseDTO.setUserId(address.getUserId());
        addressResponseDTO.setUserId(address.getUserId());
        addressResponseDTO.setAddressLane1(address.getAddressLane1());
        addressResponseDTO.setAddressType(address.getAddressType());
        addressResponseDTO.setAddressLane2(address.getAddressLane2());
        addressResponseDTO.setCountry(address.getCountry());
        addressResponseDTO.setState(address.getState());
        addressResponseDTO.setZipcode(address.getZipcode());
        addressResponseDTO.setContactPhoneNumber(address.getContactPhoneNumber());
        addressResponseDTO.setContactName(address.getContactName());

        return addressResponseDTO;
    }

    public static Address toAddress(AddressRequestDTO addressRequestDTO) {
        Address address = new Address();
        address.setUserId(addressRequestDTO.getUserId());
        address.setAddressLane1(addressRequestDTO.getAddressLane1());
        address.setAddressType(addressRequestDTO.getAddressType());
        address.setAddressLane2(addressRequestDTO.getAddressLane2());
        address.setCountry(addressRequestDTO.getCountry());
        address.setState(addressRequestDTO.getState());
        address.setZipcode(addressRequestDTO.getZipcode());
        address.setContactPhoneNumber(addressRequestDTO.getContactPhoneNumber());
        address.setContactName(addressRequestDTO.getContactName());
        return address;
    }

    public static void updateAddress(AddressRequestDTO addressRequestDTO, Address address) {
        address.setUserId(addressRequestDTO.getUserId());
        address.setAddressLane1(addressRequestDTO.getAddressLane1());
        address.setAddressType(addressRequestDTO.getAddressType());
        address.setAddressLane2(addressRequestDTO.getAddressLane2());
        address.setCountry(addressRequestDTO.getCountry());
        address.setState(addressRequestDTO.getState());
        address.setZipcode(addressRequestDTO.getZipcode());
        address.setContactPhoneNumber(addressRequestDTO.getContactPhoneNumber());
        address.setContactName(addressRequestDTO.getContactName());
    }

}
