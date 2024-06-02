import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from './modules/User';

import { UserService } from './shared/user.service';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log(data);
      },
      error: (error: unknown) => {
        console.error(error);
      }
    });
  }
}
