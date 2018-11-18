import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStreamComponent } from './card-stream.component';

describe('CardStreamComponent', () => {
  let component: CardStreamComponent;
  let fixture: ComponentFixture<CardStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
