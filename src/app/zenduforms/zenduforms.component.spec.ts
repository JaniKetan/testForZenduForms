import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenduformsComponent } from './zenduforms.component';

describe('ZenduformsComponent', () => {
  let component: ZenduformsComponent;
  let fixture: ComponentFixture<ZenduformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZenduformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZenduformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
