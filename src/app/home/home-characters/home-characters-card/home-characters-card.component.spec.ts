import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCharactersCardComponent } from './home-characters-card.component';

describe('HomeCharactersCardComponent', () => {
  let component: HomeCharactersCardComponent;
  let fixture: ComponentFixture<HomeCharactersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCharactersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCharactersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
