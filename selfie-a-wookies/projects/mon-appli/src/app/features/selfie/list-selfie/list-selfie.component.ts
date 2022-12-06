import { Component } from '@angular/core';
import { JeSuisPasSelfie, Selfie } from '../models';

@Component({
  selector: 'app-list-selfie',
  templateUrl: './list-selfie.component.html',
  styleUrls: ['./list-selfie.component.css']
})
export class ListSelfieComponent {
  // items = []; // ['Une journée à Mustafar', 'Trop bien tatooine'];
  selfies: Selfie[] = [
     { description: 'cest beau !!!', titre: 'Une journée à Mustafar', imageUrl: '' }
  ];

  log(): void {
    console.info('Appel du template');
  }

  addSelfie(): void {
    this.selfies = [...this.selfies];

    this.selfies.push(
      { description: 'Tatoiine', titre: 'Ici', imageUrl: ''}
    );
  }

  removeSelfie(): void {
    this.selfies.pop();
  }

  editSelfie(item: Selfie): void {
    console.info('Edit !!', item);
  }

  get itemsEmpty(): boolean {
    return this.selfies.length === 0;
  }
}
