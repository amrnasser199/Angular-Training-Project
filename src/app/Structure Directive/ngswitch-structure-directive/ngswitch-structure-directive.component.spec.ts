import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchStructureDirectiveComponent } from './ngswitch-structure-directive.component';

describe('NgswitchStructureDirectiveComponent', () => {
  let component: NgswitchStructureDirectiveComponent;
  let fixture: ComponentFixture<NgswitchStructureDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgswitchStructureDirectiveComponent]
    });
    fixture = TestBed.createComponent(NgswitchStructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
