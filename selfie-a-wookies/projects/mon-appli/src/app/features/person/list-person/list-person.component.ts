import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../models';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'saw-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit, OnDestroy {
  items: Person[] = [];
  private sub = new Subscription();

  constructor(private readonly service: PersonService) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const subChild = this.service.getAll().subscribe(items => this.items = items);
    this.sub.add(subChild);
  }
}
