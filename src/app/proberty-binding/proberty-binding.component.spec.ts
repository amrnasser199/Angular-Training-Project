import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbertyBindingComponent } from './proberty-binding.component';

describe('ProbertyBindingComponent', () => {
  let component: ProbertyBindingComponent;
  let fixture: ComponentFixture<ProbertyBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbertyBindingComponent]
    });
    fixture = TestBed.createComponent(ProbertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
