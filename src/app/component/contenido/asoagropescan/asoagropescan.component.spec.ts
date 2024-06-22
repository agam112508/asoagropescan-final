import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoagropescanComponent } from './asoagropescan.component';

describe('AsoagropescanComponent', () => {
  let component: AsoagropescanComponent;
  let fixture: ComponentFixture<AsoagropescanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsoagropescanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsoagropescanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
