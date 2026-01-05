package edu.icet.controller;

import edu.icet.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.icet.service.CustomerService;
import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("get-customers")
    public List<Customer> getCustomer(){
        return customerService.getAll();
    }

    @PostMapping("add-customer")
    public void addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
    }
}
