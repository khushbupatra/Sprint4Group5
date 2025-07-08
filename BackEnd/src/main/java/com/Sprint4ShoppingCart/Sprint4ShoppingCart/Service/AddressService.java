package com.Sprint4ShoppingCart.Sprint4ShoppingCart.Service;

import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.AddressRequestDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.DTO.AddressResponseDTO;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Entity.Address;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Mapper.AddressMapper;
import com.Sprint4ShoppingCart.Sprint4ShoppingCart.Repository.AddressRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressService {

    private final AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public void addAddress(AddressRequestDTO addressRequestDTO){
        Address address = AddressMapper.toAddress(addressRequestDTO);
        addressRepository.save(address);
    }

    public List<AddressResponseDTO> getAddresses(){
        return addressRepository.findAll().stream()
                .map(AddressMapper::toAddressDTO)
                .collect(Collectors.toList());
    }


    public void updateAddress(AddressRequestDTO addressRequestDTO, Integer userId , Integer addressId){
        try {
            Address address = addressRepository.findByUserIdAndAddressId(userId, addressId);
            AddressMapper.updateAddress(addressRequestDTO, address);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }finally {
            System.out.println("Updating address for userId: " + userId + ", addressId: " + addressId);
        }
    }

    public void deleteAddress(Integer userId , Integer addressId){
        addressRepository.deleteByUserIdAndAddressId(userId,addressId);
    }
}
