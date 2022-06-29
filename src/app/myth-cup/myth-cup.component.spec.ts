import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythCupComponent } from './myth-cup.component';

describe('MythCupComponent', () => {
  let component: MythCupComponent;
  let fixture: ComponentFixture<MythCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MythCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MythCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
