import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforStructureDirectiveComponent } from './ngfor-structure-directive.component';

describe('NgforStructureDirectiveComponent', () => {
  let component: NgforStructureDirectiveComponent;
  let fixture: ComponentFixture<NgforStructureDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforStructureDirectiveComponent]
    });
    fixture = TestBed.createComponent(NgforStructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
