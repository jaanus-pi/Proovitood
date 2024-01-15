package ee.jaanus.contact.repository;

import ee.jaanus.contact.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    // andmebaasiga suhtleja --> teeb valmis automaatselt koik funktsioonid mida saan kasutada

    // .save()
    // .findAll()
    // .deleteById()
}
