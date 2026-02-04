import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPage } from './dropdown-page';

describe('DropdownPage', () => {
  let component: DropdownPage;
  let fixture: ComponentFixture<DropdownPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
