import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImportingComponent } from './view-importing.component';

describe('ViewImportingComponent', () => {
  let component: ViewImportingComponent;
  let fixture: ComponentFixture<ViewImportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
