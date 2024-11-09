import { Component } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { professionalExperiences } from '../../data/experiences';
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = professionalExperiences

}
