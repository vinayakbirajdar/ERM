import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeeEditComponent } from './emoployee-edit.component';

describe('EmoployeeEditComponent', () => {
  let component: EmoployeeEditComponent;
  let fixture: ComponentFixture<EmoployeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmoployeeEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
