import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPlayersComponent } from './import-players.component';

describe('ImportPlayersComponent', () => {
  let component: ImportPlayersComponent;
  let fixture: ComponentFixture<ImportPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
