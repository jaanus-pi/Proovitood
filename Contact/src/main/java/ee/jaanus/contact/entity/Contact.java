package ee.jaanus.contact.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter // getName()
@Setter // setCodeName("UUS_VAARTUS")
@Entity // hibernate
//@Table(name = "contact") kui tahta muuta tabeli nimetust
public class Contact {
    // andmebaasimudel
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // int --> kuni 2.1miljardit, Long kui 900 000 miljardit.
    private String name;
    private String codeName;
    private String phone;

//    @ManyToOne // user on postgres sees reserveeritud
//    private SysUser userWhoAdded;
    // private String kasutaja; talle ka repository, entity, controller
    // Kuidas liidestada front-endiga, kuidas see projekti paigutada.
    // sh kuidas lopptulemust saata, kuidas tavaliselt tehakse. Kas kood githubi koos juhendiga, kas SQL dump on lihtsalt kasud? jne
}
