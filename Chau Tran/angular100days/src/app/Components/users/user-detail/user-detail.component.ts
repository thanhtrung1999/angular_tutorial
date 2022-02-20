import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, GenderType } from '../../../../user'

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: any
  @Output('selected') select = new EventEmitter<User>()
  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  selectedUser() {
    this.select.emit(this.user)
  }

  deleteUser() {
    this.delete.emit(this.user.id)
  }
}
