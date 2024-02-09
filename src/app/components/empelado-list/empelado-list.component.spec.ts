import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeladoListComponent } from './empelado-list.component';

describe('EmpeladoListComponent', () => {
  let component: EmpeladoListComponent;
  let fixture: ComponentFixture<EmpeladoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpeladoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpeladoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
