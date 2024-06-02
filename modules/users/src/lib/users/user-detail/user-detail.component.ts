import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../modules/User';

import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe({
        next: (data: Params) => {
          console.log(data['id']);
          this.userService.getUserById(data['id']).subscribe({
            next: (userData: User) => {
              console.log(userData);
            },
            error: (error: unknown) => {
              console.error(error);
            }
          });
        },
        error: (error: unknown) => {
          console.error(error);
        }
      });
  }
}
