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
import { Contact } from '../../models/contact.model';

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
    this.onChanges();
    this.loadStates();
    this.setStates();
    this.setDistrict();
  }

  buildForm() {
    this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        phone: ['', [Validators.required, Validators.pattern('^\\d{3}-\\d{3}-\\d{4}$')]],
        email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        adressName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        state: ['', Validators.required],
        districtName: ['', Validators.required],
        zipCode : ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5),
          Validators.pattern("^[0-9]*$")
        ]]
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

  loadDistricts(state) {
    this.state = state.id;
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    const newContact: Contact = new Contact(this.contactForm.value);
    newContact.stateName = this.contactForm.value.state.nombre;
    this.store.dispatch(
      new fromActionsContacts.SaveContact(newContact)
    );
  }

  ngOnDestroy(): void {
  }

  onChanges(): void {
    this.contactForm.get('state').valueChanges.subscribe(val => {
      this.loadDistricts(val);
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
}
