import { Component } from '@angular/core';
import { Selfie } from './features/selfie/models';

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

  leSelfieRecu : Selfie | null = null;

  displayEdition(selfie: Selfie): void {
    this.leSelfieRecu = selfie;
  }

  hideEdition(): void {
    this.leSelfieRecu = null;
  }
}
