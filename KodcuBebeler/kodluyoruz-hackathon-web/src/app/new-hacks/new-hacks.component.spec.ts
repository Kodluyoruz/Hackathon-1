import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHacksComponent } from './new-hacks.component';

describe('NewHacksComponent', () => {
  let component: NewHacksComponent;
  let fixture: ComponentFixture<NewHacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
