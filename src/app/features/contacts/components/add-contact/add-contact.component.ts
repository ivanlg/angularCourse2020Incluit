import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { IContactsState } from '../../store/contacts.reducer';
import { StatesAndDistrictsSevice } from '../../services/statesAndDistricts.service';
import * as fromActionsContacts from '../../store/contacts.actions';
import * as fromSelectorContacts from '../../store/contacts.selectors';
import { filter } from 'rxjs/operators';
import { IState } from '../../models/state.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit, OnDestroy {

  states: IState[] = [];
  districs: [] = [];
  state: number;
  distric: number;
  submitted = false;

  loadStatesSubs: Subscription;
  loadDistrctSubs: Subscription;

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<IContactsState>,
    private statesAndDistrictsSevice: StatesAndDistrictsSevice,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadStates();
    this.setStates();
    this.setDistrict();
    this.logContacts();
  }

  buildForm() {
    this.contactForm = this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        adressName: ['', Validators.required],
        stateName: ['', Validators.required],
        districtName: ['', Validators.required]
    });
  }

  loadStates() {
    this.store.dispatch(
        new fromActionsContacts.FetchStates()
    );
  }

  setStates() {
    this.loadStatesSubs = this.store.pipe(select(fromSelectorContacts.selectDataState))
        .pipe(filter(val => !!val))
        .subscribe((states: IState[]) => {
            this.states = states;
        });
  }

  loadDistricts(event) {
    this.state = event;
    this.store.dispatch(
        new fromActionsContacts.FetchDistricts(this.state),
    );
  }

  setDistrict() {
    this.loadDistrctSubs = this.store
      .pipe(select(fromSelectorContacts.selectDataDistrict))
      .pipe(filter(val => !!val))
      .subscribe((data: any) => {
          this.districs = data.municipios;
      });
  }

  logContacts(){
    this.loadDistrctSubs = this.store
      .pipe(select(fromSelectorContacts.selectDataContacts))
      .pipe(filter(val => !!val))
      .subscribe((data: any) => {
          console.log('contacts',data);
      });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
    console.log(this.contactForm.value);
    this.store.dispatch(
      new fromActionsContacts.SaveContact(this.contactForm.value),
    );
  }

  ngOnDestroy(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
}
