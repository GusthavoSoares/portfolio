import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExperienceComponent } from "../../components/experience/experience.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MenuComponent,
    FooterComponent, ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
