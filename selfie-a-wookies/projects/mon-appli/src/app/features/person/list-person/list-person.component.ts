import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private readonly service: PersonService,
              private readonly router: Router,
              private readonly route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const subChild = this.service.getAll().subscribe(items => this.items = items);
    this.sub.add(subChild);

    // pour naviguer sur une nouvelle route et donc charger un nouveau composant
    // this.router.navigate(['personnes']);
    // pour récupérer un id passé dans la route /personnes/2
    const id = this.route.snapshot.params['id'];
    // this.route.params.subscribe(params => )
  }
}
