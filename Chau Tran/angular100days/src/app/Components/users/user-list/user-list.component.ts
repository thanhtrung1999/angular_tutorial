import { Component, Input, OnInit } from '@angular/core';
import { User, users } from '../../../../user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [...users]
  currentUser = this.users[0]
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selectedUser: User) {
    this.currentUser = selectedUser
  }

  onDelete(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId)
    if (this.currentUser.id === userId) {
      this.currentUser = this.users[0]
    }
  }
}
