import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaReadComponent } from './tarefa-read.component';

describe('TarefaReadComponent', () => {
  let component: TarefaReadComponent;
  let fixture: ComponentFixture<TarefaReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
