import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactPageComponent } from './list-contact-page.component';

describe('ListContactPageComponent', () => {
  let component: ListContactPageComponent;
  let fixture: ComponentFixture<ListContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
