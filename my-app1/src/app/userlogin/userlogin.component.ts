import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.submitted=true;
    form.reset();
  }


}
