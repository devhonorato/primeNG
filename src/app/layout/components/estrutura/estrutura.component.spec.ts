/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstruturaComponent } from './estrutura.component';

describe('EstruturaComponent', () => {
  let component: EstruturaComponent;
  let fixture: ComponentFixture<EstruturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstruturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
