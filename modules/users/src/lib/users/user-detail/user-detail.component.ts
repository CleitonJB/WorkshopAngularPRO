import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

import { getParamsId } from '../shared/utils/get-params-id';

import { User } from '../modules/User';

import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  private userService: UserService = inject(UserService);

  public $user: Observable<User> = getParamsId().pipe(
    switchMap((id: string) => this.userService.getUserById(id))
  );
}
