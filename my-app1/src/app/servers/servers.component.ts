import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  filteredStatus = '';
  servers = [
    {
      name: 'Rohan',
      instanceType: '34',
      started: new Date(2017, 1, 15),
      status: 'Available',
    },
    {
      name: 'Rakesh',
      instanceType: '40',
      started: new Date(2018, 8, 11),
      status: 'Available',
    },
    {
      name: 'Prakash',
      instanceType: '30',
      started: new Date(),
      status: 'Not Available',
    },
    {
      name: 'Ritik',
      instanceType: '43',
      started: new Date(2020, 7, 22),
      status: 'Available',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  getStatusClasses(status: string) {
    return {
      'list-group-item-success': status === 'Available',
      // 'list-group-item-warning': status === 'offline',
      'list-group-item-danger': status === 'Not Available',
    };
  }
}