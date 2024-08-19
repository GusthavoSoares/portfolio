import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from '../../components/card/card.component';
import { ImageComponent } from "../../components/image/image.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent,
    FooterComponent,
    CardComponent, ImageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
