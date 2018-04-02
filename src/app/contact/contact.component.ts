import { Component, OnInit } from '@angular/core';

export interface contacts {
  full_name: string,
  email: string,
  mobile: number,
  comment: any
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

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
