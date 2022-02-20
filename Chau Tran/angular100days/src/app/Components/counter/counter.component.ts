import { Component } from '@angular/core';

let _count = 1
@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `count: {{ count }}`,
  styles: [
  ]
})
export class CounterComponent {
  count = _count++
}
