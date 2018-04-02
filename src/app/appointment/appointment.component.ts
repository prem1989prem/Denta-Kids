import { Component, OnInit } from '@angular/core';

export interface contacts {
  full_name: string,
  email: string,
  mobile: number,
  comment: any
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  private contact: contacts;

  constructor() { }

  
  ngOnInit() {

    this.contact = {
      full_name: "",
      email: "",
      mobile: null,
      comment: ""

    }
  }

  addContact(data) {
    console.log(data);

  }

}
