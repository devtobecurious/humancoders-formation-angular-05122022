import { Component } from '@angular/core';

@Component({
  selector: 'saw-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  items = ['Tatooine', 'Mustafar', 'Kashyyyk'];
}
