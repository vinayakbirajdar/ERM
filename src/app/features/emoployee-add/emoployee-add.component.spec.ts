import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeeAddComponent } from './emoployee-add.component';

describe('EmoployeeAddComponent', () => {
  let component: EmoployeeAddComponent;
  let fixture: ComponentFixture<EmoployeeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmoployeeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
