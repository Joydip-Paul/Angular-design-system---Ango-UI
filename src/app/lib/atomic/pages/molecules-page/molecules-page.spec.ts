import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesPage } from './molecules-page';

describe('MoleculesPage', () => {
  let component: MoleculesPage;
  let fixture: ComponentFixture<MoleculesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
