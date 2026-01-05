package edu.icet.service;

import edu.icet.model.Customer;
import edu.icet.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository repository;

    public List<Customer> getAll() {
        return repository.findAll();
    }

    public void addCustomer(Customer customer) {
        repository.save(customer);
    }
}
