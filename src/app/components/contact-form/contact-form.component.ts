import { Component } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  projects: Project[] = [
    {
      field: "Front-end",
      demands: [
        { name: "Landing page", price: 1500 },
        { name: "Website", price: 3000 },
        { name: "News portal", price: 5000 }
      ]
    },
    {
      field: "Back-end",
      demands: [
        { name: "Relational entity model", price: 500 },
        { name: "Physical model", price: 1000 },
        { name: "API", price: 2500 },
        { name: "Administrative panel", price: 3000 }
      ]
    },
    {
      field: "Data science",
      demands: [
        { name: "Qlik dashboard", price: 2000 },
        { name: "ETL pipeline", price: 2500 },
        { name: "Pentaho job", price: 4000 },
        { name: "Regression machine learning model", price: 6000 },
        { name: "NLP machine learning model", price: 9000 },
        { name: "Prediction machine learning model", price: 12000 }
      ]
    }
  ]
}
