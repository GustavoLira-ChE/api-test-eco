import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCardContainerComponent } from './client-card-container.component';

describe('ClientCardContainerComponent', () => {
  let component: ClientCardContainerComponent;
  let fixture: ComponentFixture<ClientCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
