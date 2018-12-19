import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptInstallationComponent } from './prompt-installation.component';

describe('PromptInstallationComponent', () => {
  let component: PromptInstallationComponent;
  let fixture: ComponentFixture<PromptInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
