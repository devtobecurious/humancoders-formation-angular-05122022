import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { JeSuisPasSelfie, Selfie } from '../models';
import { SelfieService } from '../services/selfie.service';

@Component({
  selector: 'app-list-selfie',
  templateUrl: './list-selfie.component.html',
  styleUrls: ['./list-selfie.component.css']
})
export class ListSelfieComponent implements OnInit, OnDestroy {
  private mainSubscription = new Subscription();

  // items = []; // ['Une journée à Mustafar', 'Trop bien tatooine'];
  selfies: Selfie[] = [
     { description: 'cest beau !!!', title: 'Une journée à Mustafar', imageUrl: '' }
  ];

  @Output() editerSelfie = new EventEmitter<Selfie>();

  constructor(private readonly service: SelfieService) {}

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // Ca ne fait rien, ça prépare
    const observableLazy$ = this.service.getAll();
    const traitementDonneesApi = (items: Selfie[]) => this.selfies = items;

    // La on exécute
    const childSubscription = observableLazy$.subscribe(traitementDonneesApi); // Le subscribe déclenche l'appel http de httpclient !


    this.mainSubscription.add(childSubscription);
    // this.service.getAll().subscribe(items => this.selfies = items);
  }

  log(): void {
    console.info('Appel du template');
  }

  addSelfie(): void {
    this.selfies = [...this.selfies];

    this.selfies.push(
      { description: 'Tatoiine', title: 'Ici', imageUrl: ''}
    );
  }

  removeSelfie(): void {
    this.selfies.pop();
  }

  editSelfie(item: Selfie): void {
    this.editerSelfie.emit(item);
  }

  get itemsEmpty(): boolean {
    return this.selfies.length === 0;
  }
}
