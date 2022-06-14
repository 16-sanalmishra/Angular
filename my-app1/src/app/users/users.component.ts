import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Sanal',
      username:'sanal@gmail.com'
    },
    {
      id: 2,
      name: 'John',
      username:'user2@gmail.com'
    },
    {
      id: 3,
      name: 'Robert',
      username:'user3@gmail.com'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}