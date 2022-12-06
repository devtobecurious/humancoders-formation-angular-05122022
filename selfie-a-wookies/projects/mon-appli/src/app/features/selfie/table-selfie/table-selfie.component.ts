import { Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoggerService } from '../../../shared/tools/logger.service';
import { Selfie } from '../models';

@Component({
  selector: 'saw-table-selfie',
  templateUrl: './table-selfie.component.html',
  styleUrls: ['./table-selfie.component.css']
})
export class TableSelfieComponent implements OnChanges, OnInit {


  private _titre: string = '';

  @Input() items: Selfie[] = [];
  @Input() set titre(value: string) {
    this._titre = value;
  }

  @Output() pourEditionSelfie = new EventEmitter<Selfie>();

  get titre(): string {
    return this._titre;
  }

  constructor(private readonly logger: LoggerService) {
  }

  ngOnInit(): void {
    // this.pourEditionSelfie.emit({ description: '', imageUrl: '', titre: ''});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('Oula ca change', changes);
  }

  clickPourEdit(item: Selfie): void {
    this.pourEditionSelfie.emit(item);
  }

}


