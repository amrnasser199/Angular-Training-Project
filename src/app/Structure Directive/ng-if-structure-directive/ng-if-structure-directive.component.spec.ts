import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfStructureDirectiveComponent } from './ng-if-structure-directive.component';

describe('NgIfStructureDirectiveComponent', () => {
  let component: NgIfStructureDirectiveComponent;
  let fixture: ComponentFixture<NgIfStructureDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfStructureDirectiveComponent]
    });
    fixture = TestBed.createComponent(NgIfStructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
