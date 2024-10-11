import { Component} from '@angular/core';
import { SpeakerCardComponent } from "../speaker-card/speaker-card.component";

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [SpeakerCardComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent{

}
