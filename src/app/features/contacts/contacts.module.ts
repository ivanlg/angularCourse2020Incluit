import { NgModule, ModuleWithProviders } from '@angular/core';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { StatesAndDistrictsSevice } from './services/statesAndDistricts.service';
import { CommonModule } from '@angular/common';

import * as fromContactsReducer from './store/contacts.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './store/contacts.effects';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('contacts', fromContactsReducer.reducer),
        EffectsModule.forFeature([ContactsEffects]),
        EffectsModule.forRoot([])
    ],
    declarations: [
        AddContactComponent,
        ListContactsComponent,
        ContactCardComponent
    ],
    entryComponents: [
        AddContactComponent
    ],
    exports: [
        AddContactComponent,
        ListContactsComponent
    ],
    providers: [StatesAndDistrictsSevice]
})
export class ContactsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ContactsModule
        };
    }
}
