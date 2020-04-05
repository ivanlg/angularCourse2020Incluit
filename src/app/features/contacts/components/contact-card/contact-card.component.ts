import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: IContact;

  constructor() { }

  ngOnInit(): void {
  }

}
