import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [RatingComponent], // this component will be used in some moment
})
export class AppModule {
  constructor(private injector: Injector) {
    const component = createCustomElement(RatingComponent, {
      injector: this.injector,
    });

    if (!customElements.get('mt-rating')) {
      customElements.define('mt-rating', component);
    }
  }

  ngDoBootstrap() {}
}
