import { Component } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  isCollapse: boolean = false;

  constructor(private router: Router) { }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  navigateTo(pageName: string) {
    console.log('Navigating to:', pageName);
    const kebabCaseName = this.toKebabCase(pageName);
    this.router.navigate([kebabCaseName]);
  }

  private toKebabCase(str: string) {
    return str.replace(/\s+/g, '-').toLowerCase();
  }


}
