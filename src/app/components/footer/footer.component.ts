import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialMedias = {
    linkedin: "https://www.linkedin.com/in/gusthavosoares/",
    github: "https://github.com/GusthavoSoares"
  }
}
