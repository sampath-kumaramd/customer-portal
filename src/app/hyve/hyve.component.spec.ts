import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyveComponent } from './hyve.component';

describe('HyveComponent', () => {
  let component: HyveComponent;
  let fixture: ComponentFixture<HyveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HyveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
