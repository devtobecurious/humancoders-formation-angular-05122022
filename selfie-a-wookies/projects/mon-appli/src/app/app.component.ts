import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à Wookies';
  subTitle = 'Une super appli Star wars';

  aNePasFaire(value: string): string {
    return value.toLowerCase();
  }
}
