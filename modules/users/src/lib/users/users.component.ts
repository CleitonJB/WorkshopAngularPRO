import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { User } from './modules/User';

import { UserService } from './shared/user.service';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public $users: Observable<User[]> = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) {}
}
