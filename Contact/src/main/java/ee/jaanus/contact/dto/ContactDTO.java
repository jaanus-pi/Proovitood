package ee.jaanus.contact.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDTO {
    private Long id; // int --> kuni 2.1miljardit, Long kui 900 000 miljardit.
    private String name;
    private String phone;
}
