import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpclient } from './httpclient';

describe('Httpclient', () => {
  let component: Httpclient;
  let fixture: ComponentFixture<Httpclient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpclient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpclient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
