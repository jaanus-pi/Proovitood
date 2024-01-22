package ee.jaanus.contact.controller;

import ee.jaanus.contact.dto.ContactDTO;
import ee.jaanus.contact.entity.Contact;
import ee.jaanus.contact.repository.ContactRepository;
import ee.jaanus.contact.service.ContactService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private ContactService contactService;

    @GetMapping("contact")
    public List<ContactDTO> getContacts() {
        return contactService.transformContactToDTO(contactRepository.findAll());
    }

    @PostMapping("contact")
    public List<ContactDTO> addContact(@RequestBody Contact contact) {
        //
        contactRepository.save(contact);
        return contactService.transformContactToDTO(contactRepository.findAll());
    }

    // localhost:8080/contact?id=2
    @DeleteMapping("contact")
    public List<ContactDTO> deleteContact(@RequestParam Long id) {
        contactRepository.deleteById(id);
        return contactService.transformContactToDTO(contactRepository.findAll());
    }
}
