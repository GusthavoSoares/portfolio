import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
  { path: "", component: MainComponent, pathMatch: 'full' },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "skills", component: SkillsComponent }
];
