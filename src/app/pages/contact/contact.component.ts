import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContainerComponent } from "../../components/container/container.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MenuComponent, FooterComponent, ContainerComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
