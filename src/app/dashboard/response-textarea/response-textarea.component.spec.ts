import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTextareaComponent } from './response-textarea.component';

describe('ResponseTextareaComponent', () => {
  let component: ResponseTextareaComponent;
  let fixture: ComponentFixture<ResponseTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
