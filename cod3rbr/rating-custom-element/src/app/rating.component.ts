import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>();
  @Input() rate = 0;

  rates: number[] = [1, 2, 3, 4, 5];

  previousRate: number;

  constructor() {}

  ngOnInit() {}

  setRate(newRate: number) {
    this.rate = newRate;
    this.previousRate = undefined;
    this.rated.emit(newRate);
  }

  setTemporaryRate(newRate: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = newRate;
  }

  clearTemporaryRate() {
    if (this.previousRate != undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
