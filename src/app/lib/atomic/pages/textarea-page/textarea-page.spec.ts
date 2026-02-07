import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaPage } from './textarea-page';

describe('TextareaPage', () => {
  let component: TextareaPage;
  let fixture: ComponentFixture<TextareaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
