import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsPage } from './organisms-page';

describe('OrganismsPage', () => {
  let component: OrganismsPage;
  let fixture: ComponentFixture<OrganismsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
