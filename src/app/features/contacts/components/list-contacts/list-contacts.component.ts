import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { IContactsState } from '../../store/contacts.reducer';
import * as fromSelectorContacts from '../../store/contacts.selectors';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit, OnDestroy {

  @Input() contacts: Contact[];

  loadContactsSubs: Subscription;

  constructor(private store: Store<IContactsState>) { }

  ngOnInit(): void {
    this.loadContactsSubs = this.store
      .pipe(select(fromSelectorContacts.selectDataContacts))
      .pipe(filter(val => !!val))
      .subscribe((data: any) => {
          debugger;
          this.contacts = data;
      });
  }

  ngOnDestroy(): void {
  }

}
