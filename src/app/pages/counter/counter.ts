import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.html',
    styles: `
    button {
    padding: 5px;
    margin: 5px 10px;
    width: 75px;
    }
    `
})
export class Counter {
  counter = 10;
  value = 1;
  CounterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.CounterSignal.update((current) => current + value);
  }

  resetCounter(value: number) {
    this.counter = 0;
    this.CounterSignal.set(0);
  }
}