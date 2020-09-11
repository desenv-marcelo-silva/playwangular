import {
  AfterContentInit,
  Component,
  OnInit,
  Input,
  ContentChild,
} from "@angular/core";
import { NgModel, FormControlName } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
})
export class InputComponent implements AfterContentInit, OnInit {
  inputToUseLikeAReference: any;

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip = true;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.inputToUseLikeAReference = this.model || this.control;
    if (this.inputToUseLikeAReference === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com uma diretiva ngModel ou formControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return (
      this.inputToUseLikeAReference.valid &&
      (this.inputToUseLikeAReference.dirty ||
        this.inputToUseLikeAReference.touched)
    );
  }

  hasError(): boolean {
    return (
      this.inputToUseLikeAReference.invalid &&
      (this.inputToUseLikeAReference.dirty ||
        this.inputToUseLikeAReference.touched)
    );
  }
}
