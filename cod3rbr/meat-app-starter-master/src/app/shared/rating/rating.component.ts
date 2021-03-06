import { EventEmitter, Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "mt-rating",
  templateUrl: "./rating.component.html",
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];

  rate: number = 0;

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
