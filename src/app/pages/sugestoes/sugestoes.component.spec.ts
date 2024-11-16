import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestoesComponent } from './sugestoes.component';

describe('SugestoesComponent', () => {
  let component: SugestoesComponent;
  let fixture: ComponentFixture<SugestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugestoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
