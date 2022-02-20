import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.background-color]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{ backgroundColor: progressColor, width: progress + '%' }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container, .progress {
        height: 20px
      }
      .progress-bar-container {
        width: 100%
      }
    `
  ]
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50
  @Input() backgroundColor = '#ccc'
  @Input('progress-color') progressColor = 'tomato'

  constructor() {
    console.log('progress bar constructor');
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
    console.log('===================');
  }

  ngOnInit(): void {
    console.log('progress bar ngOnInit');
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
    console.log('===================');
  }

  ngOnChanges() {
    console.log('progress bar ngOnChanges');
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor
    });
    console.log('===================');
  }

}
