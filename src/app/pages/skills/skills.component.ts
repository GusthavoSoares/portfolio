import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Skill } from '../../interfaces/skill';
import { CardComponent } from "../../components/card/card.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CardComponent, ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { id: uuidv4(), name: "Angular", icon: "fa-angular" },
    { id: uuidv4(), name: "CSS", icon: "fa-css3" },
    { id: uuidv4(), name: "HTML", icon: "fa-html5" },
    { id: uuidv4(), name: "Python", icon: "fa-python" }
  ]



}
