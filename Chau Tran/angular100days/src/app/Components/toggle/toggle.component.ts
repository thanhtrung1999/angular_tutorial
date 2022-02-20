import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() header!: string
  @Input() question!: string
  @Input() content!: string
  @Input() canSkip!: boolean
  @Output() skip = new EventEmitter<boolean>()

  @Input() checked?: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  toggle() {
    this.checkedChange.emit(!this.checked)
  }
}
