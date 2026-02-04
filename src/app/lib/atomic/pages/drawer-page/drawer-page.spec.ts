import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerPage } from './drawer-page';

describe('DrawerPage', () => {
  let component: DrawerPage;
  let fixture: ComponentFixture<DrawerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
