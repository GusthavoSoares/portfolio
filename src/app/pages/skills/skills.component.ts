import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MenuComponent, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
}
