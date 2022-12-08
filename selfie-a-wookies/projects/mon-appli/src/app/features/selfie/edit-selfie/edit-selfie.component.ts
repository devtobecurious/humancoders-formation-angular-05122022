import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'saw-edit-selfie',
  templateUrl: './edit-selfie.component.html',
  styleUrls: ['./edit-selfie.component.css']
})
export class EditSelfieComponent {
  @Input() monSelfie !: Selfie;
  @Output() cancelEdition = new EventEmitter<{}>();

  clickToCancel(): void {
    this.cancelEdition.emit({});
  }

  save(): void {
    // appel de mon api
    // this.service.save(this.monSelfie).subscribe();
  }
}
