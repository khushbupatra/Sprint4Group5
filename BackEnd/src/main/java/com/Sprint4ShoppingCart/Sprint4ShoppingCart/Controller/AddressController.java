package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Controller;


import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.AddressRequestDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.AddressResponseDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service.AddressService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/{user-id}/addresses")
public class AddressController {

    private AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping
    private void addAddress(
            @RequestBody AddressRequestDTO addressRequestDTO
    ){

        addressService.addAddress(addressRequestDTO);
    }

    @GetMapping
    private List<AddressResponseDTO> getAllAddresses(){
        return addressService.getAddresses();
    }

    @PutMapping("/{address-id}")
    private void updateAddress(
            @PathVariable("user-id") Integer userId,
            @PathVariable("address-id") Integer addressId,
            @RequestBody AddressRequestDTO addressRequestDTO
    ){
        addressService.updateAddress(addressRequestDTO,userId,addressId);
    }

    @DeleteMapping("/{address-id}")
    private void deleteAddress(
            @PathVariable("user-id") Integer userId,
            @PathVariable("address-id") Integer addressId
    ){
        addressService.deleteAddress(userId,addressId);
    }


}
