import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayrecordfilePage } from './playrecordfile.page';

describe('PlayrecordfilePage', () => {
  let component: PlayrecordfilePage;
  let fixture: ComponentFixture<PlayrecordfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayrecordfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayrecordfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
