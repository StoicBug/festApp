import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./componentes/nav-bar/nav-bar.component";
import { HeroComponent } from "./componentes/hero/hero.component";
import { AboutComponent } from "./componentes/about/about.component";
import { SpeakersComponent } from './componentes/speakers/speakers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeroComponent, AboutComponent, SpeakersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devFestAgadir';
}
