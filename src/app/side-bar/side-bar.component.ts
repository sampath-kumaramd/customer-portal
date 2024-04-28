import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  isCollapse: boolean = false;

  constructor() { }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }


}
