import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDestaqueComponent } from './evento-destaque.component';

describe('EventoDestaqueComponent', () => {
  let component: EventoDestaqueComponent;
  let fixture: ComponentFixture<EventoDestaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDestaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
