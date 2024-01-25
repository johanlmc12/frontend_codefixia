import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepositorioComponent } from './form-repositorio.component';

describe('FormRepositorioComponent', () => {
  let component: FormRepositorioComponent;
  let fixture: ComponentFixture<FormRepositorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRepositorioComponent]
    });
    fixture = TestBed.createComponent(FormRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
