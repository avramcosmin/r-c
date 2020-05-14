import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTssTrComponent } from './ngx-tss-tr.component';

describe('NgxTssTrComponent', () => {
  let component: NgxTssTrComponent;
  let fixture: ComponentFixture<NgxTssTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTssTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTssTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
