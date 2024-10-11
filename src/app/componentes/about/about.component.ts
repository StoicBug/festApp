import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Tent, Code, Users, Compass } from 'lucide-angular';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule, NgFor, NgStyle],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly Tent = Tent;
  readonly Code = Code;
  readonly Users = Users;
  readonly Compass = Compass;

}
