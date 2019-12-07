import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCharactersComponent } from './home-characters.component';

describe('HomeCharactersComponent', () => {
  let component: HomeCharactersComponent;
  let fixture: ComponentFixture<HomeCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
