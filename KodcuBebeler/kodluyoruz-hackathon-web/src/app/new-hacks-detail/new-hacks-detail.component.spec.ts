import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHacksDetailComponent } from './new-hacks-detail.component';

describe('NewHacksDetailComponent', () => {
  let component: NewHacksDetailComponent;
  let fixture: ComponentFixture<NewHacksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHacksDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHacksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
