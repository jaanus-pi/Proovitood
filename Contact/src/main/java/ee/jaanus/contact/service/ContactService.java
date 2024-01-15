package ee.jaanus.contact.service;

import ee.jaanus.contact.dto.ContactDTO;
import ee.jaanus.contact.entity.Contact;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    public List<ContactDTO> transformContactToDTO(List<Contact> contacts) {
        ModelMapper modelMapper = new ModelMapper();
        return contacts.stream().map(e -> modelMapper.map(e, ContactDTO.class)).toList();
    }
}
