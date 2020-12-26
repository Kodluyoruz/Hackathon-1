import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHacksDetailComponent } from './old-hacks-detail.component';

describe('OldHacksDetailComponent', () => {
  let component: OldHacksDetailComponent;
  let fixture: ComponentFixture<OldHacksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldHacksDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldHacksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
