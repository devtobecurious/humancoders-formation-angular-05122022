import { Component, Input } from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'saw-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.css']
})
export class CardPersonComponent {
  @Input() person !: Person;
}
