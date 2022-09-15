import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OllieMainComponent } from './ollie-main.component';

describe('OllieMainComponent', () => {
  let component: OllieMainComponent;
  let fixture: ComponentFixture<OllieMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OllieMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OllieMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
