import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHacksComponent } from './old-hacks.component';

describe('OldHacksComponent', () => {
  let component: OldHacksComponent;
  let fixture: ComponentFixture<OldHacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldHacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldHacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
